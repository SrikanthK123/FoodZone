
import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
        return state.filter(item=>item.recipeName !==action.payload)
      },
  },
});

export const { addRecipe,removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
