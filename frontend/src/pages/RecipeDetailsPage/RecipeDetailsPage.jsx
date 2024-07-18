import {
  Container,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../features/recipes/recipeSlice";
import { useParams } from "react-router-dom";
import NoImage from "../../assets/images/no_image.jpg";
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

  function formattedDated(date) {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(2, 4);

    return month + "/" + day + "/" + year;
  }

  return (
    <>
      <Container>
        <Box>
          <Paper>
            <h1>{recipe.name} Details</h1>
            {recipe.image ? (
              <img src={recipe.image} alt="food...yummy" />
            ) : (
              <img src={NoImage} alt="No Image Available" />
            )}
            <h4>Recipe Submitted by: {recipe.submitted_by}</h4>
            <Box>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Ingredients</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recipe.ingredients.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
          <Box>
            <Paper sx={{ p: 5 }}>
              <Typography variant="h6">Steps</Typography>
              <Typography variant="h8">{recipe.steps}</Typography>
            </Paper>
          </Box>
          <Typography>
            Submitted on: {formattedDated(recipe.created_at)}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
