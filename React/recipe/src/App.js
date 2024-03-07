import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  const searchRecipe = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=803adfd3c1844620806d0ce5bcc90f2c`
    );
    const recipeDetailsPromises = response.data.results.map((recipe) =>
      axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=803adfd3c1844620806d0ce5bcc90f2c`)
    );
    const recipeDetailsResponses = await Promise.all(recipeDetailsPromises);
    const recipeDetails = recipeDetailsResponses.map((response) => response.data);
    setRecipeData(recipeDetails);
  };

  return (
    <div className="App">
      <div className="header">Recipe Finder</div>
      <input type="text" value={recipe} onChange={(e) => setRecipe(e.target.value)} />
      <button onClick={searchRecipe}>Search</button>
      {recipeData && (
        <div className="recipe-list">
          {recipeData.map((recipe, index) => (
            <div key={index} className="recipe">
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>{recipe.servings} servings</p>
              <p>Ready in {recipe.readyInMinutes} minutes</p>
              <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Recipe
              </a>{" "}
            </div>
          ))}
        </div>
      )}
      <div className="footer">© 2022 Recipe Finder</div>
    </div>
  );
}

export default App;
