import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../css/Board.css';
import Square from './Square';
import { GameContext } from '../../contexts/GameContext';
import { useWindowSize } from '../../hooks/useWindowSize';

function Board() {
    /*This component mapps the squares according to the board and checks 
    the viewport height and width for orientation*/

    let { board } = useContext(GameContext);
    const [width, height] = useWindowSize();

    return (
        <section>
            <div className={`board ${width >= height ? 'board-row' : 'board-col'}`}>
                {board.map((squ) => {
                    return <Square key={squ.pos} id={squ.pos} />
                })}
            </div>
        </section>
    )
}
export default Board
