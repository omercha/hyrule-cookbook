import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../services/RecipeService';
import { useCompletion } from '../hooks/useCompletion';
import TrackerCard from '../components/TrackerCard';
import './Tracker.css';

function Tracker() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { completedIds, toggleCompletion } = useCompletion();

  useEffect(() => {
      async function fetchRecipes() {
        const data = await getAllRecipes();
        setRecipes(data);
        setLoading(false);
      }
      fetchRecipes();
    }, []);
  

  if (loading) return <div className="status-message">Loading recipes...</div>;

  return (
    <div className="tracker-page">
      <div className="recipe-list">
        {recipes.map(recipe => (
          <TrackerCard key={recipe.id} recipe={recipe} isCompleted={completedIds.has(recipe.id)} onToggle={toggleCompletion} />
        ))}
      </div>
    </div>
  );
}

export default Tracker;