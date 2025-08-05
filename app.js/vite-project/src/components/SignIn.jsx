import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ users, setCurrentUser }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (user) {
      setCurrentUser(user);
      navigate('/all-recipes');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded shadow-md w-[320px] text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>

        <input
          name="username"
          placeholder="Username"
          className="border px-4 py-2 w-full text-center mb-3"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border px-4 py-2 w-full text-center mb-3"
          onChange={handleChange}
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-semibold rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
