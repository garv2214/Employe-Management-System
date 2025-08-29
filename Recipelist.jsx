// components/RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, toggleFavorite, favorites }) {
  if (!recipes.length) return <p>No recipes found. Try searching!</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
        />
      ))}
    </div>
  );
}
