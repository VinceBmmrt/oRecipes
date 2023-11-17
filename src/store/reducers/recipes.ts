import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../../@types/recipe';

interface RecipesState {
  isLoading: boolean;
  list: Recipe[];
  favorites: Recipe[];
}
export const initialState: RecipesState = {
  isLoading: true,
  list: [],
  favorites: [],
};

export const fetchRecipes = createAsyncThunk('recipes/fetch', async () => {
  const { data } = await axios.get<Recipe[]>(
    'https://orecipes-api.onrender.com/api/recipes'
  );

  return data;
});

export const fetchFavoriteRecipes = createAsyncThunk(
  'recipes/fetch-favorites',
  async () => {
    const { data } = await axios.get<{ favorites: Recipe[] }>(
      'https://orecipes-api.onrender.com/api/favorites'
    );

    return data;
  }
);

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default recipesReducer.reducer;
