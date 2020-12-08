import React, { useState } from 'react';
import Board from './components/board/Board';
import Header from './components/header/Header';

import './css/globals.css';
import './css/main.css';

function App() {
  const [playing, setPlaying] = useState(false)
  return (
    <main className="App">

      {playing
        ? <Board />
        : <div className='landing-page-wrapper'>
          <Header />
          <div className='play-button-wrapper'>
            <button onClick={() => { setPlaying(!playing) }}>Play</button>
          </div>
        </div>
      }

    </main>
  );
}

export default App;
