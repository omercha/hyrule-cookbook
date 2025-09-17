import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import viewRecipesIcon from '../assets/icons/view_recipes_icon.png';
import trackCompletionIcon from '../assets/icons/track_completion_icon.png';

const FeatureCard = ({ navigateTo, title, iconSrc, iconAlt }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateTo();
    }
  };
  return (
    <div className="feature-card" onClick={navigateTo} role="button" tabIndex={0} onKeyPress={handleKeyPress}>
      <h2>
        <span>{title}</span>
        <img src={iconSrc} alt={iconAlt} className="feature-card-icon" />
      </h2>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="home-title animated-title">Hyrule Cookbook</h1>
        <p className="home-subtitle animated-subtitle">
          A minimalist web app that compiles all recipe information for Tears of the Kingdom and helps you keep track of your cooking progress. No registration/installation required!
        </p>
        <section className="intro-section">
          <div className="feature-cards">
            <FeatureCard navigateTo={() => navigate('/recipes')} title="View Recipes" iconSrc={viewRecipesIcon} iconAlt="view recipes icon" />
            <FeatureCard navigateTo={() => navigate('/tracker')} title="Track Completion" iconSrc={trackCompletionIcon} iconAlt="track completion icon" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;