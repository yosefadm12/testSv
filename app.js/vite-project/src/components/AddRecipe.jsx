import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = ({ addRecipe }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, ingredients, instructions } = form;

    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    addRecipe(form);
    navigate('/all-recipes');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 w-full max-w-md"
    >
      <h2 className="text-3xl font-bold">Add New Recipe</h2>

      <input
        name="title"
        placeholder="Recipe Title"
        className="border px-4 py-2 w-full"
        onChange={handleChange}
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients (comma separated)"
        className="border px-4 py-2 w-full h-24"
        onChange={handleChange}
      />

      <textarea
        name="instructions"
        placeholder="Instructions"
        className="border px-4 py-2 w-full h-32"
        onChange={handleChange}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipe;
