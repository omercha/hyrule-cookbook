import { useState, useCallback } from 'react';

const STORAGE_KEY = 'hyrule-cookbook-completed';

const getCompletedFromStorage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return new Set();
  }
};

export const useCompletion = () => {
  const [completedIds, setCompletedIds] = useState(getCompletedFromStorage);

  const toggleCompletion = useCallback((recipeId) => {
    setCompletedIds(prevIds => {
      const newIds = new Set(prevIds);
      newIds.has(recipeId) ? newIds.delete(recipeId) : newIds.add(recipeId);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newIds)));
      return newIds;
    });
  }, []);

  return { completedIds, toggleCompletion };
};