import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../css/Board.css';
import Square from './Square';
import { GameContext } from '../../contexts/GameContext';


function Board() {
    let { board, team } = useContext(GameContext);

    useEffect(() => {
        //putting board as a dependency re-renders after select rather than after move

    }, [board]);

    return (
        <section>
            {/* <div className='toggle-button-wrapper'>
                <button>Toggle</button>
            </div> */}
            <div className={`board ${window.innerWidth >= window.innerHeight ? 'board-row' : 'board-col'}`}>
                {board.map((squ, i) => {

                    //how can I get a variable name that 
                    return <Square key={squ.pos} id={squ.pos} />
                })}
            </div>
        </section>
    )
}
export default Board
