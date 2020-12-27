import React, { useState, createContext, useReducer, useEffect } from 'react';
import { useGetFocus } from '../hooks/useGetFocus';
import { handleKing, handleQueen, handlePawn, handleBishop, handleRook, handleKnight } from '../utils/utils';
import startingBoard from '../starting-board.json';
export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  const reducer = (state, action) => {
    //generates new board
    const movePiece = (moveFrom, moveTo, piece, board) => {

      const newMoveTo = {
        pos: board[moveTo].pos,
        currentPiece: { ...piece, touched: true }
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

    const isOver = (moveTo, board) => board[moveTo].currentPiece && board[moveTo].currentPiece.piece === 'king' ? 'over' : false;

    let v = null;
    const { team } = state;

    const getNewTeam = team => team === 'two' ? 'one' : 'two';

    switch (action.type) {
      case 'reset':
        //reset team information here
        return { valid: null, board: startingBoard, team: 'one' }
      case 'king':
        //check if move is valid
        v = handleKing(moveFrom, moveTo, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      case 'queen':
        v = handleQueen(moveFrom, moveTo, piece, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      case 'rook':
        v = handleRook(moveFrom, moveTo, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      case 'bishop':
        v = handleBishop(moveFrom, moveTo, piece, board);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      case 'knight':
        v = handleKnight(moveFrom, moveTo);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      case 'pawn':
        v = handlePawn(moveFrom, moveTo, piece);
        if (isOver === 'over' && v) {
          return { valid: 'over', board, team }
        }
        return {
          valid: v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: getNewTeam(team)
        };
      default:
        return { valid: false, board, team };
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    {
      board: startingBoard,
      valid: null,
      team: 'one'
    });

  //gets and sets focus for piece on the board
  let focus = useGetFocus(state.team, state.board);

  if (!active && focus) {
    setActive(focus);
  }

  if (!active && !focus) {
    setPlaying('review')
  }

  if (state.valid === 'over' && playing !== 'review') {
    setPlaying('review')
  }

  const value = { playing, board: state.board, valid: state.valid, active, team: state.team, dispatch, setPlaying, setActive };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}