import React, { useState, createContext } from 'react';
import startingBoard from '../starting-board.json';
import { useGetFocus } from '../hooks/useGetFocus';

export const GameContext = createContext();

export function GameContextProvider({ children }) {

  const [board, setBoard] = useState(startingBoard);
  const [team, setTeam] = useState('one');
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false)

  let focus = useGetFocus(team, board);

  if (!active && focus) {
    setActive(focus);
  }

  const resetBoard = () => {
    setBoard(startingBoard);
    setActive(null);
    setTeam('one');
  };

  const value = { playing, board, active, team, setPlaying, setActive, setBoard, resetBoard, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}