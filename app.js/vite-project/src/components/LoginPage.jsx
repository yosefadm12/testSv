import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-16 py-12 rounded-md shadow-md text-center flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-gray-800">Sv Recipe</h1>

        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
