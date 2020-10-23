import React from 'react'
import './Board.css'
import Queen from '../pieces/Queen';
import King from '../pieces/King';
import Bishop from '../pieces/Bishop';
import Pawn from '../pieces/Pawn';
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';

function Board() {

    return (
        <section>
            <div className='board'>
                <div className='square'><King team='white' /></div>
                <div className='square'><Queen team='white' /></div>
                <div className='square'><Rook team='white' /></div>
                <div className='square'><Bishop team='white' /></div>
                <div className='square'><Bishop team='white' /></div>
                <div className='square'><Knight team='white' /></div>
                <div className='square'><Pawn team='white' /></div>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'><Pawn team='black' /></div>
                <div className='square'><Knight team='black' /></div>
                <div className='square'><Bishop team='black' /></div>
                <div className='square'><Bishop team='black' /></div>
                <div className='square'><Rook team='black' /></div>
                <div className='square'><Queen team='black' /></div>
                <div className='square'><King team='black' /></div>
            </div>
        </section>
    )
}

export default Board
