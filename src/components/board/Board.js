import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../css/Board.css';
import Square from './Square';
import { GameContext } from '../../contexts/GameContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import Instructions from './Instructions';


function Board() {
    let { board } = useContext(GameContext);
    const [width, height] = useWindowSize();

    return (
        <section>
            <div className={`board ${width >= height ? 'board-row' : 'board-col'}`}>
                {board.map((squ) => {
                    return <Square key={squ.pos} id={squ.pos} />
                })}
            </div>
            <Instructions />
        </section>
    )
}
export default Board
