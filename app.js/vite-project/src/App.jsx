import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/loginPage';
import Register from './components/Register';
import SignIn from './components/signIn';
import AllRecipes from './components/AllRecipes';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import Layout from './components/layout';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const register = (newUser) => {
    setUsers([...users, newUser]);
  };

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    const updated = [...recipes];
    updated.splice(index, 1);
    setRecipes(updated);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Register register={register} />} />
        <Route
          path="/signin"
          element={<SignIn users={users} setCurrentUser={setCurrentUser} />}
        />
        {currentUser && (
          <>
            <Route
              path="/all-recipes"
              element={
                <Layout>
                  <AllRecipes recipes={recipes} deleteRecipe={deleteRecipe} />
                </Layout>
              }
            />
            <Route
              path="/add-recipe"
              element={
                <Layout>
                  <AddRecipe addRecipe={addRecipe} />
                </Layout>
              }
            />
            <Route
              path="/search-recipe"
              element={
                <Layout>
                  <SearchRecipe recipes={recipes} />
                </Layout>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
