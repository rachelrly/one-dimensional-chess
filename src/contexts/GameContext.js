import React, { useState, useContext, createContext } from 'react';
import startingBoard from '../starting-board.json';
import { useMovePiece } from '../hooks/useMovePiece';
import { useGetFocus } from '../hooks/useGetFocus';

export const GameContext = createContext();

export function GameContextProvider({ children }) {

  const [board, setBoard] = useState(startingBoard);
  const [active, setActive] = useState(7);
  const [team, setTeam] = useState('one');
  console.log('active', active)

  const value = { board, active, team, setActive, setBoard, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}