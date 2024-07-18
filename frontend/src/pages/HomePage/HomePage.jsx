import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../features/recipes/recipeSlice";
import RecipeTable from "../../components/RecipeTable/RecipeTable";

export default function HomePage() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);
  const error = useSelector((state) => state.recipes.error);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (status === "idle") {
      setData(dispatch(getRecipes()));
    }
  }, [status, dispatch]);

  return (
    <Container>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && <RecipeTable data={recipes} />}
      {status === "failed" && <div>Failed to load...</div>}
    </Container>
  );
}
