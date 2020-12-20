import React, { useContext, Fragment, useEffect, useState } from 'react';
import Header from './Header';
import JumpingPawn from './JumpingPawn';
import { GameContext } from '../../contexts/GameContext';
import About from './About';

function LandingPage(props) {
  const { setPlaying } = useContext(GameContext);
  const [showAbout, setShowAbout] = useState(false);

  //resets showAbout after render
  useEffect(() => {
    return () => setShowAbout(false);
  }, [])

  return (
    <Fragment>
      {!showAbout
        ? <div className='landing-page-wrapper'>
          <Header />
          <JumpingPawn />
          <div className='play-button-wrapper'>
            <button onClick={() => setPlaying(true)}>Play</button>
            <button onClick={() => setShowAbout(true)}>Learn more</button>
          </div>
        </div>
        : <About hideAbout={() => setShowAbout(false)} />}
    </Fragment>
  )
}

export default LandingPage;
