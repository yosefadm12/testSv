import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex  bg-gray-50">
    <div className="min-h-screen flex bg-gray-50 ">
      <div className="w-48 bg-gray-600 p-4 flex flex-col items-center gap-4 shadow-md">
        <button
          className="border px-4 py-2 w-full bg-gray-200 b"
          onClick={() => navigate('/all-recipes')}
        >
          All Recipes
        </button>
        <button
          className="border px-4 py-2 w-full bg-gray-200 "
          onClick={() => navigate('/add-recipe')}
        >
          Add New Recipe
        </button>
        <button
          className="border px-4 py-2 w-full bg-gray-200"
          onClick={() => navigate('/search-recipe')}
        >
          Search Recipe
        </button>
        <button
          className="text-red-600 font-bold mt-auto"
          onClick={() => navigate('/')}
        >
          Logout
        </button>
      </div>
      <div className="flex-1 flex justify-center items-start p-10">
        {children}
      </div>
    </div>
    </div>
    
    
  );
};

export default Layout;
