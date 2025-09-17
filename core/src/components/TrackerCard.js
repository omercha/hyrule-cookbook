import React from 'react';
import './TrackerCard.css';

const methodColours = {
  extreme_heat: '#fce5cd',
  extreme_cold: '#d6f8fb',
  hot_spring: '#d9d9d9',
};

const TrackerCard = ({ recipe, isCompleted, onToggle }) => {
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onToggle(recipe.id);
  };

  const imageStyles = {
    backgroundColor: methodColours[recipe.method],
  };

  return (
    <div
      className={`tracker-card ${isCompleted ? 'completed' : ''}`}
      onClick={() => onToggle(recipe.id)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle(recipe.id)}
    >
      <div className="tracker-card-image-container" style={imageStyles}>
        <img src={recipe.image} alt={recipe.name} className="tracker-card-image" />
      </div>
      <div className="tracker-card-body">
        <h3 className="tracker-card-title">{recipe.name}</h3>
        <span className="tracker-card-id">#{recipe.id}</span>
      </div>
      <div className="tracker-card-checkbox-container">
        <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
      </div>
    </div>
  );
};

export default TrackerCard;
