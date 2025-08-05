import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ register }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    confirm: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z]{4,}$/.test(form.username)) {
      newErrors.username = 'Username must be at least 4 characters.';
    }

    if (!/(?=.*[A-Z])(?=.*[^A-Za-z0-9])/.test(form.password) || form.password.length < 7) {
      newErrors.password = 'Password must contain a special character and one uppercase letter';
    }

    if (form.password !== form.confirm) {
      newErrors.confirm = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    register({
      username: form.username,
      password: form.password,
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded shadow-md w-[320px] text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

        <div className="mb-4">
          <input
            name="username"
            placeholder="Username"
            className="border px-4 py-2 w-full text-center"
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border px-4 py-2 w-full text-center"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            className="border px-4 py-2 w-full text-center"
            onChange={handleChange}
          />
          {errors.confirm && (
            <p className="text-red-600 text-sm mt-1">{errors.confirm}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
