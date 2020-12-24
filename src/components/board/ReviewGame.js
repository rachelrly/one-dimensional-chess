import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { MdReplay, MdClose } from 'react-icons/md';
import { GiChessKing } from 'react-icons/gi';
import '../../css/Review.css';

function ReviewGame() {
  const { team, setPlaying, resetGame } = useContext(GameContext);

  useEffect(() => {
    resetGame();
  }, []);

  const handleReplay = () => {
    setPlaying(true);
  }

  const handleExit = () => {
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
