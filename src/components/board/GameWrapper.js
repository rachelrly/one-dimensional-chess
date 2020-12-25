import React, { Fragment, useContext, useEffect } from 'react';
import Board from './Board';
import Instructions from './Instructions';
import { IoMdArrowBack } from 'react-icons/io';
import { GameContext } from '../../contexts/GameContext';
import ReviewGame from './ReviewGame';
import startingBoard from '../../starting-board.json';

function GameWrapper() {
  /*This componenet controls the contidional rendering for the board and review*/
  const { setPlaying, playing } = useContext(GameContext);

  return (
    <div className='game-wrapper'>
      {playing === true
        ? <Fragment>
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
        : <ReviewGame />}

    </div>

  )
}

export default GameWrapper
