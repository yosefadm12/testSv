import React from 'react';

const AllRecipes = ({ recipes, deleteRecipe }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <h2 className="text-3xl font-bold text-center">All Recipes</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="border p-4 shadow-sm rounded-md bg-white">
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <p className="font-semibold">Ingredients:</p>
          <ul className="list-disc list-inside mb-2">
            {recipe.ingredients.split(',').map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>
          <p className="font-semibold">Instructions:</p>
          <p className="mb-4">{recipe.instructions}</p>
          <button
            onClick={() => deleteRecipe(index)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
          >
            Delete Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipes;
