import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { getAllRecipes } from '../services/RecipeService';
import './Recipes.css';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(term) ||
      String(recipe.id).includes(term)
    );
  });

  return (
    <div className="recipes-page">
      {loading ? (
        <div className="status-message">Loading recipes...</div>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <RecipeList recipes={filteredRecipes} />
        </>
      )}
    </div>
  );
}

export default Recipes;