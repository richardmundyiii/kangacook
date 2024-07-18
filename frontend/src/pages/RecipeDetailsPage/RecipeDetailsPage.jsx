import { Container, Box, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../features/recipes/recipeSlice";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes.recipe);
  const status = useSelector((state) => state.recipes.status);
  const error = useSelector((state) => state.recipes.error);

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  console.log(recipe);

  return (
    <>
      <Container>
        <Box>
          <Paper>
            <h1>Recipe Details</h1>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
