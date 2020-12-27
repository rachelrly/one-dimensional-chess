import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { MdReplay, MdClose } from 'react-icons/md';
import { GiChessKing } from 'react-icons/gi';
import '../../css/Review.css';

function ReviewGame() {
  const { team, setPlaying, setActive, dispatch } = useContext(GameContext);

  const payload = { moveFrom: null, moveTo: null, piece: {}, board: [] }

  const handleReplay = () => {
    dispatch({ type: 'reset', payload });
    setActive(null);
    setPlaying(true);
  }

  const handleExit = () => {
    dispatch({ type: 'reset', payload });
    setActive(null);
    setPlaying(false);
  }

  return (
    <div className='review-wrapper'>
      <div className='review-button-wrapper'>
        <MdReplay
          onClick={() => handleReplay()}
          tabIndex='0'
          className='review-icon'
          onKeyPress={e => e.key === 'Enter' ? handleReplay() : null} />
        <MdClose
          onClick={() => handleExit()}
          tabIndex='0'
          className='review-icon'
          onKeyPress={e => e.key === 'Enter' ? handleExit() : null} />
      </div>
      <h2>You Won!!!</h2>
      < GiChessKing className={`${team} review-king`} />

    </div>
  )
}

export default ReviewGame
