import React, { useContext } from 'react';
import Header from './Header';
import JumpingPawn from './JumpingPawn';
import { GameContext } from '../../contexts/GameContext';

function LandingPage(props) {
  const { setPlaying } = useContext(GameContext);
  return (
    <div className='landing-page-wrapper'>

      <Header />
      <JumpingPawn />
      <div className='play-button-wrapper'>
        <button>Demo</button>
        <button onClick={() => setPlaying(true)}>Play</button>
        <button>Learn more</button>

      </div>
    </div>
  )
}

export default LandingPage;
