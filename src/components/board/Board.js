import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../css/Board.css';
import Square from './Square';
import { GameContext } from '../../contexts/GameContext';
import { useWindowSize } from '../../hooks/useWindowSize';



function Board() {
    let { board } = useContext(GameContext);
    const [width, height] = useWindowSize();

    //make game wrapper that is not board
    //make 'x' and cxl game

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
