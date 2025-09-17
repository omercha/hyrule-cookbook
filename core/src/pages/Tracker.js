import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../services/RecipeService';
import { useCompletion } from '../hooks/useCompletion';
import TrackerTable from '../components/TrackerTable';
import ProgressBar from '../components/ProgressBar';
import './Tracker.css';

function Tracker() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {completedIds, toggleCompletion} = useCompletion();

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
      <ProgressBar
        completed={completedIds.size}
        total={228}
      />
      <TrackerTable
        recipes={recipes}
        completedIds={completedIds}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default Tracker;