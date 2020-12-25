import React, { useState, createContext, useReducer } from 'react';
import startingBoard from '../starting-board.json';
import { useGetFocus } from '../hooks/useGetFocus';
import { handleKing, handleQueen, handlePawn, handleBishop, handleRook, handleKnight } from '../utils/utils';
//import helpers from utils
//remove private names



export const GameContext = createContext();

export function GameContextProvider({ children }) {

  const [team, setTeam] = useState('one');
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  const reducer = (state, action) => {
    //generates new board
    const movePiece = (moveFrom, moveTo, piece, board) => {
      board[moveTo].currentPiece = piece;
      board[moveFrom].currentPiece = null;
      return board;
    }

    const isOver = (moveTo, board) => board[moveTo].currentPiece && board[moveTo].currentPiece.piece === 'king' ? 'over' : false;

    const { moveFrom, moveTo, board, piece } = action.payload;
    const newBoard = movePiece(moveFrom, moveTo, piece, board);

    let v = null;

    const setNextMove = (bool) => {
      if (bool) {
        const newTeam = team === 'one' ? 'two' : 'one';
        setTeam(newTeam);
        setActive(null);
      }
    }

    switch (action.type) {
      case 'reset':
        return { valid: null, board: startingBoard }
      case 'king':
        //check if move is valid
        v = handleKing(moveFrom, moveTo, board);
        //if game is over, return that otherwise return if move is valid
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      case 'queen':
        v = handleQueen(moveFrom, moveTo, piece, board);
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      case 'rook':
        v = handleRook(moveFrom, moveTo, board);
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      case 'bishop':
        v = handleBishop(moveFrom, moveTo, piece, board);
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      case 'knight':
        v = handleKnight(moveFrom, moveTo);
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      case 'pawn':
        v = handlePawn(moveFrom, moveTo, piece);
        console.log(v)
        setNextMove(v)
        return { valid: v && isOver ? isOver : v, board: v ? newBoard : board };
      default:
        setNextMove(v)
        return { valid: false, board };
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    {
      board: startingBoard,
      valid: null
    });


  if (state.valid === 'over') {
    //reset board
    dispatch({ type: 'reset' });
    setPlaying('review');
    setActive(null);
    setTeam('one');
  }


  //gets and sets focus for piece on the board
  //this is always set to null with event handler
  //because hook can't be called conditionally
  let focus = useGetFocus(team, state.board);

  if (!active && !focus) {
    setPlaying('review')
  }

  if (!active && focus) {
    setActive(focus);
  }

  console.log(state.board)
  const value = { playing, board: state.board, valid: state.valid, active, team, dispatch, setPlaying, setActive, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}