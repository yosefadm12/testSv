import React, { useState } from 'react';

const SearchRecipe = ({ recipes }) => {
  const [query, setQuery] = useState('');

  const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
      <h2 className="text-3xl font-bold">Search Recipes</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className="border px-4 py-2 w-full text-center"
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((recipe, index) => (
        <div key={index} className="border p-4 shadow-sm rounded-md bg-white w-full">
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>

          <p className="font-semibold">Ingredients:</p>
          <ul className="list-disc list-inside mb-2">
            {recipe.ingredients.split(',').map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>

          <p className="font-semibold">Instructions:</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchRecipe;
