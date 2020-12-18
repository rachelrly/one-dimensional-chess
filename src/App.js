import React, { useState, useContext } from 'react';
import GameWrapper from './components/board/GameWrapper';
import LandingPage from './components/landing-page/LandingPage';
import { GameContext } from './contexts/GameContext';
import './css/globals.css';
import './css/main.css';

function App() {
  const { playing } = useContext(GameContext);
  return (
    <main className="App">

      {playing
        ? <GameWrapper />
        : <LandingPage />
      }

    </main>
  );
}

export default App;
