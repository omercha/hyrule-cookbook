import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import { getAllRecipes } from '../services/RecipeService';
import Footer from '../components/Footer';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchRecipes() {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(term) ||
      String(recipe.id).includes(term)
    );
  });

  return (
    <div className="page-container">
      {loading ? (
        <div className="status-message">Loading...</div>
      ) : (
        <div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <RecipeList recipes={filteredRecipes} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Recipes;