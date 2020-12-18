import React, { useState, useContext, createContext } from 'react';
import startingBoard from '../starting-board.json';
import { useMovePiece } from '../hooks/useMovePiece';
import { useGetFocus } from '../hooks/useGetFocus';

export const GameContext = createContext();

export function GameContextProvider({ children }) {

  const [board, setBoard] = useState(startingBoard);
  const [team, setTeam] = useState('one');
  const [active, setActive] = useState(null);

  let focus = useGetFocus(team, board);

  if (!active) {
    setActive(focus);
  }


  const value = { board, active, team, setActive, setBoard, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}