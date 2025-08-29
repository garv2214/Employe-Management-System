// App.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const searchRecipes = async (ingredient) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  const toggleFavorite = (recipe) => {
    let updated;
    if (favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      updated = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
    } else {
      updated = [...favorites, recipe];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🍲 Recipe Finder</h1>
      <SearchBar onSearch={searchRecipes} />
      <RecipeList recipes={recipes} toggleFavorite={toggleFavorite} favorites={favorites} />
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}
