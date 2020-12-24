import React, { useState, createContext, useReducer } from 'react';
import startingBoard from '../starting-board.json';
import { useGetFocus } from '../hooks/useGetFocus';

export const GameContext = createContext();

export function GameContextProvider({ children }) {

  const reducer = () => {
    //takes in state object, 
    //uses switch from movePiece to return new 
    //displatch //piece.piece



    // switch (piece.piece) {
    // case 'reset' : reset piece and return to state
    //   case 'king':
    //     valid = _handleKing(moveFrom, moveTo, piece, board);
    //     break;
    //   case 'queen':
    //     valid = _handleQueen(moveFrom, moveTo, piece, board);
    //     break;
    //   case 'rook':
    //     valid = _handleRook(moveFrom, moveTo, board);
    //     break;
    //   case 'bishop':
    //     valid = _handleBishop(moveFrom, moveTo, piece, board);
    //     break;
    //   case 'knight':
    //     valid = _handleKnight(moveFrom, moveTo);
    //     break;
    //   case 'pawn':
    //     valid = _handlePawn(moveFrom, moveTo, piece);
    //     break;
    //   default: valid = false;
    // }

  }

  const [state, dispatch] = useReducer(
    reducer,
    {
      board: startingBoard,
      piece: null,
      moveFrom: null,
      moveTo: null,
      valid: null
    }
  )

  const [board, setBoard] = useState(startingBoard);
  const [team, setTeam] = useState('one');
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false)

  let focus = useGetFocus(team, board);

  if (!active && !focus) {
    setPlaying('review')
  }

  if (!active && focus) {
    setActive(focus);
  }

  function resetGame() {
    setBoard(null)
    setBoard(b);
    setTeam('one');
    setActive(null);

  }

  const value = { playing, board, active, team, setPlaying, setActive, setBoard, resetGame, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}