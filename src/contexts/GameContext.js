import React, { useState, useContext, createContext } from 'react';
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

  //HOW will I know when the game is over? How will I trigger this?


  const value = { playing, board, active, team, setPlaying, setActive, setBoard, setTeam };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}