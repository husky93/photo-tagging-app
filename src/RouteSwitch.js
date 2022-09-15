import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Game from './pages/game/Game';
import React from 'react';

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/level-:id" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
