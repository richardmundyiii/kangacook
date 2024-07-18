import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
