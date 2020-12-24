import React, { useContext } from 'react';
import GameWrapper from './components/board/GameWrapper';
import LandingPage from './components/landing-page/LandingPage';
import Review from './components/board/ReviewGame';
import { GameContext } from './contexts/GameContext';
import './css/globals.css';
import './css/main.css';

function App() {
  const { playing } = useContext(GameContext);
  return (
    <main className="App">

      {playing === true
        ? <GameWrapper />
        : playing === 'review'
          ? <Review />
          : <LandingPage />
      }

    </main>
  );
}

export default App;
