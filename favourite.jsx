// components/Favorites.jsx
import React from "react";

export default function Favorites({ favorites, toggleFavorite }) {
  if (!favorites.length) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">⭐ Favorites</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="bg-gray-700 p-3 rounded-lg">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="rounded-lg mb-2"
            />
            <p className="font-semibold">{recipe.strMeal}</p>
            <button
              onClick={() => toggleFavorite(recipe)}
              className="mt-2 bg-red-600 px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
