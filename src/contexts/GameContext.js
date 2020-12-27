import React, { useState, createContext, useReducer } from 'react';
import { useGetFocus } from '../hooks/useGetFocus';
import { handleKing, handleQueen, handlePawn, handleBishop, handleRook, handleKnight } from '../utils/utils';
import startingBoard from '../starting-board.json';
export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [team, setTeam] = useState('one');
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  const reducer = (state, action) => {
    //generates new board
    const movePiece = (moveFrom, moveTo, piece, board) => {

      const newMoveTo = {
        pos: board[moveTo].pos,
        currentPiece: piece
      };
      const newMoveFrom = {
        pos: board[moveFrom].pos,
        currentPiece: null
      };

      const newBoard = board.map((b, index) => {
        if (index === moveTo) {
          return newMoveTo;
        }
        else if (index === moveFrom) {
          return newMoveFrom;
        }
        else {
          return b;
        }
      });
      return newBoard;
    }

    const { moveFrom, moveTo, board, piece } = action.payload;

    const setNextMove = (bool) => {
      if (bool === true) {
        const newTeam = team === 'one' ? 'two' : 'one';
        setTeam(newTeam);
        setActive(null);
      }
    }

    const isOver = (moveTo, board) => board[moveTo].currentPiece && board[moveTo].currentPiece.piece === 'king' ? 'over' : false;

    let v = null;

    switch (action.type) {
      case 'reset':
        //reset team information here
        return { valid: null, board: startingBoard }
      case 'king':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        //check if move is valid
        v = handleKing(moveFrom, moveTo, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      case 'queen':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        v = handleQueen(moveFrom, moveTo, piece, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      case 'rook':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        v = handleRook(moveFrom, moveTo, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      case 'bishop':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        v = handleBishop(moveFrom, moveTo, piece, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      case 'knight':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        v = handleKnight(moveFrom, moveTo);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      case 'pawn':
        if (isOver === 'over') {
          return { valid: 'over', board }
        }
        v = handlePawn(moveFrom, moveTo, piece);
        if (isOver === 'over' && v) {
          return { valid: 'over', board }
        }
        setNextMove(v)
        return { valid: v, board: v ? movePiece(moveFrom, moveTo, piece, board) : board };
      default:
        return { valid: false, board };
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    {
      board: startingBoard,
      valid: null
    });

  //gets and sets focus for piece on the board
  let focus = useGetFocus(team, state.board);

  if (!active && focus) {
    setActive(focus);
  }

  if (!active && !focus) {
    setPlaying('review')
  }

  if (state.valid === 'over' && playing !== 'review') {
    setPlaying('review')
  }
  console.log(state)
  const value = { playing, board: state.board, valid: state.valid, active, team, dispatch, setPlaying, setActive, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}