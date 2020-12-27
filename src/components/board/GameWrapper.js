import React, { Fragment, useContext, useEffect } from 'react';
import Board from './Board';
import Instructions from './Instructions';
import { IoMdArrowBack } from 'react-icons/io';
import { GameContext } from '../../contexts/GameContext';
import ReviewGame from './ReviewGame';

function GameWrapper() {
  /*This componenet controls the contidional rendering for the board and review*/
  const { setPlaying, playing } = useContext(GameContext);

  return (
    <div className='game-wrapper'>
      <Fragment>
        <div className='back-button-wrapper'>
          <IoMdArrowBack
            tabIndex='0'
            className='back-button'
            onClick={() => setPlaying(false)}
            onKeyPress={e => e.key === 'Enter' ? setPlaying(false) : null} />
          <Instructions />
        </div>
        <Board />
      </Fragment>

    </div>

  )
}

export default GameWrapper
