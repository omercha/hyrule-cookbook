import React from 'react';
import './RecipeCard.css';

const methodColours = {
  extreme_heat: '#fce5cd',
  extreme_cold: '#d6f8fb',
  hot_spring: '#d9d9d9',
};

const RecipeCard = ({ recipe }) => {
  const imageStyles = {
    backgroundColor: methodColours[recipe.method],
  };
  return (
    <div className="recipe-card">
      <div className="recipe-card-image-container" style={imageStyles}>
        <img src={recipe.image} alt={recipe.name} className="recipe-card-image" />
      </div>
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <span className="recipe-card-id">#{recipe.id}</span>
        <ul className="recipe-card-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
