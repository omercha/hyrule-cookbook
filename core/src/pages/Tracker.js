import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../services/RecipeService';
import { useCompletion } from '../hooks/useCompletion';
import TrackerTable from '../components/TrackerTable';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

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
    <div className="page-container">
      {loading ? (
        <div className="status-message">Loading...</div>
      ) : (
        <div>
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