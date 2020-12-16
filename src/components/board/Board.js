import React, { useState, useEffect, useContext } from 'react';
import '../../css/Board.css';
import Square from './Square';
import { GameContext } from '../../contexts/GameContext';


function Board() {
    let { board, team } = useContext(GameContext);

    useEffect(() => {

    }, [team]);

    return (
        <section>
            <div className='toggle-button-wrapper'>
                <button>Toggle</button>
            </div>
            <div className='board'>
                {board.map(squ => <Square key={squ.pos} id={squ.pos} />)}
            </div>
        </section>
    )
}
export default Board
