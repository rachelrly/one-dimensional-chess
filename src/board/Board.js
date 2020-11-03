import React, { useState, useEffect } from 'react'
import startingBoard from './starting-board.json';
import useGetPiece from './useGetPiece'
import './Board.css'




function Board() {
    const [active, setActive] = useState(false);
    const [board, setBoard] = useState([]);
    //state active
    //state board
    //loaded on useEffect from JSON

    useEffect(() => {
        setBoard(startingBoard);
    }, [])

    return (
        <section>
            <div className='board'>

                <div className='square' id='s1'>{useGetPiece('s1', board)}</div>
                <div className='square' id='s2'>{useGetPiece('s2', board)}</div>
                <div className='square' id='s3'>{useGetPiece('s3', board)}</div>
                <div className='square' id='s4'>{useGetPiece('s4', board)}</div>
                <div className='square' id='s5'>{useGetPiece('s5', board)}</div>
                <div className='square' id='s6'>{useGetPiece('s6', board)}</div>
                <div className='square' id='s7'>{useGetPiece('s7', board)}</div>
                <div className='square' id='s8'>{useGetPiece('s8', board)}</div>
                <div className='square' id='s9'>{useGetPiece('s9', board)}</div>
                <div className='square' id='s10'>{useGetPiece('s10', board)}</div>
                <div className='square' id='s11'>{useGetPiece('s11', board)}</div>
                <div className='square' id='s12'>{useGetPiece('s12', board)}</div>
                <div className='square' id='s13'>{useGetPiece('s13', board)}</div>
                <div className='square' id='s14'>{useGetPiece('s14', board)}</div>
                <div className='square' id='s15'>{useGetPiece('s15', board)}</div>
                <div className='square' id='s16'>{useGetPiece('s16', board)}</div>
                <div className='square' id='s17'>{useGetPiece('s17', board)}</div>
                <div className='square' id='s18'>{useGetPiece('s18', board)}</div>
            </div>
        </section>
    )
}


export default Board
