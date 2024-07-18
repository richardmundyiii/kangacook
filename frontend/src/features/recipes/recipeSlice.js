import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../config/axios";

const initialState = {
  recipe: {
    name: "",
    ingredients: "",
    steps: "",
    main_ingredient: "",
    image: "",
    submitted_by: "",
    created_at: "",
  },
  status: "idle",
  error: null,
};

export const getRecipes = createAsyncThunk("recipe/", async () => {
  const response = await AxiosInstance.get("recipe/");
  return response.data;
});

export const getRecipeById = createAsyncThunk(
  "recipes/getRecipeById",
  async (id) => {
    const response = await AxiosInstance.get(`recipe/${id}`);
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRecipeById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipe = action.payload;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
