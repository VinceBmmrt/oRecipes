import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';
import { Recipe } from '../../@types/recipe';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: data,
};

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
});

export default recipesReducer.reducer;
