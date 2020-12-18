import React, { useContext } from 'react';
import Board from './Board';
import Instructions from './Instructions';
import { IoMdArrowBack } from 'react-icons/io';
import { GameContext } from '../../contexts/GameContext';

function GameWrapper() {
  const { setPlaying } = useContext(GameContext);
  return (
    <div className='game-wrapper'>
      <div className='back-button-wrapper'>
        <IoMdArrowBack tabIndex='0' className='back-button' onClick={() => setPlaying(false)} />
        <Instructions />
      </div>
      <Board />

    </div>

  )
}

export default GameWrapper
