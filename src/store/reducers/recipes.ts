import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import { axiosInstance } from '../../utils/axios';

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
  const { data } = await axiosInstance.get<Recipe[]>('/recipes');

  return data;
});

export const fetchFavoriteRecipes = createAsyncThunk(
  'recipes/fetch-favorites',
  async () => {
    const { data } = await axiosInstance.get<{ favorites: Recipe[] }>(
      '/favorites'
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
      })
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      });
  },
});

export default recipesReducer.reducer;
