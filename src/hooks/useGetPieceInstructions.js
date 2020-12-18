import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export function useGetPieceInstructions(id) {
  /*This component returns the piece at given board position*/

  const { board } = useContext(GameContext)

  const { currentPiece } = board.find(pos => pos.pos === id);

  switch (currentPiece.piece) {
    case 'king':
      return <p>The King can move one or two squares, but it may not jump over pieces.</p>;
    case 'queen':
      return <p>The Queen combines the moves of the Bishop and the Rook, moving to a square of the same color or to any space that has no occupied squares in between. </p>;
    case 'rook':
      return <p>The Rook moves as it does in standard chess.</p>;
    case 'bishop':
      return <p>The Bishop moves to squares that are the same color and jumps over squares of the opposite color.</p>;
    case 'knight':
      return <p>The Knight moves two or three squares, and it may jump over other pieces.</p>;
    case 'pawn':
      return <p>The pawn only moves one square, except on the first move, where it may move two squares.</p>;
  }

  return null;
}

export default useGetPieceInstructions;