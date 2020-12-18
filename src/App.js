import React, { useState } from 'react';
import Board from './components/board/Board';
import LandingPage from './components/landing-page/LandingPage';
import './css/globals.css';
import './css/main.css';

function App() {
  const [playing, setPlaying] = useState(false)
  return (
    <main className="App">

      {playing
        ? <Board setPlaying={() => setPlaying(false)} />
        : <LandingPage setPlaying={() => setPlaying(true)} />
      }

    </main>
  );
}

export default App;
