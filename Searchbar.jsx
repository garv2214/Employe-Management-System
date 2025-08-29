// components/SearchBar.jsx
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter ingredient..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded text-black flex-grow"
      />
      <button className="bg-green-600 px-4 py-2 rounded">Search</button>
    </form>
  );
}
