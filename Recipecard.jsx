// components/RecipeCard.jsx
import React from "react";

export default function RecipeCard({ recipe, toggleFavorite, isFavorite }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mb-2"
      />
      <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
      <div className="flex justify-between mt-2">
        <a
          href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View Recipe
        </a>
        <button
          onClick={() => toggleFavorite(recipe)}
          className={`px-2 py-1 rounded ${
            isFavorite ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
}
