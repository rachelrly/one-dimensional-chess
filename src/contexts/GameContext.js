import React, { useState, createContext, useReducer, useEffect } from 'react';
import { useGetFocus } from '../hooks/useGetFocus';
import { handleKing, handleQueen, handlePawn, handleBishop, handleRook, handleKnight } from '../utils/utils';
import startingBoard from '../starting-board.json';
export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  const reducer = (state, action) => {
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

    const isOver = (moveTo, board) => board[moveTo].currentPiece && board[moveTo].currentPiece.piece === 'king';

    let v = null;
    const { team } = state;

    const getNewTeam = team => team === 'two' ? 'one' : 'two';

    switch (action.type) {
      case 'reset':
        //resets board, team, and valid to starting position
        return { valid: null, board: startingBoard, team: 'one' }
      case 'king':
        //check if move is valid
        v = handleKing(moveFrom, moveTo, board);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
        };
      case 'queen':
        v = handleQueen(moveFrom, moveTo, piece, board);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
        };
      case 'rook':
        v = handleRook(moveFrom, moveTo, board);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
        };
      case 'bishop':
        v = handleBishop(moveFrom, moveTo, piece, board);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
        };
      case 'knight':
        v = handleKnight(moveFrom, moveTo);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
        };
      case 'pawn':
        v = handlePawn(moveFrom, moveTo, piece);
        return {
          valid: v && isOver(moveTo, board) ? 'over' : v,
          board: v ? movePiece(moveFrom, moveTo, piece, board) : board,
          team: v ? getNewTeam(team) : team
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

  console.log(state)

  const value = { playing, board: state.board, valid: state.valid, active, team: state.team, dispatch, setPlaying, setActive };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}