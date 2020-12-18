import React from 'react';
import Header from './Header';
import JumpingPawn from './JumpingPawn';

function LandingPage(props) {
  return (
    <div className='landing-page-wrapper'>
      <JumpingPawn />
      <Header />
      <div className='play-button-wrapper'>
        <button onClick={() => { props.setPlaying() }}>Play</button>
        <button>Demo</button>
      </div>
    </div>
  )
}

export default LandingPage;
