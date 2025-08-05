import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-10 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6">Sv Recipe</h1>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
