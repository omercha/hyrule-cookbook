import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../services/RecipeService';
import { useCompletion } from '../hooks/useCompletion';
import TrackerTable from '../components/TrackerTable';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
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

  return (
    <div className="page-container tracker-page">
      {loading ? (
        <div className="status-message">Loading...</div>
      ) : (
        <div className="tracker-content">
          <ProgressBar completed={completedIds.size} total={recipes.length} />
          <TrackerTable
            recipes={recipes}
            completedIds={completedIds}
            toggleCompletion={toggleCompletion}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Tracker;