import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});
