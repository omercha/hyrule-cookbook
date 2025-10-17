import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Recipes from './pages/Recipes';

function App() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () =>
      setLastScrollY((prevScrollY) => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY && currentScrollY > 80) {
          setHeaderVisible(false);
        } else {
          setHeaderVisible(true);
        }
        return currentScrollY;
      });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setLastScrollY]);

  return (
    <Router>
      <Header isVisible={isHeaderVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
