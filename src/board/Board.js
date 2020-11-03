import React, { useState, useEffect } from 'react'
import startingBoard from './starting-board.json';
import './Board.css'
import Piece from '../pieces/Piece'
import { GiChessKing, GiChessPawn, GiQueenCrown, GiChessRook, GiChessKnight } from 'react-icons/gi';
import { FaChessBishop } from 'react-icons/fa';


function Board() {
    const [active, setActive] = useState(false);
    const [board, setBoard] = useState([]);
    //state active
    //state board
    //loaded on useEffect from JSON

    useEffect(() => {
        setBoard(startingBoard);
    }, [])


    const getPiece = (id) => {
        let piece = {};
        if (board.find(pos => pos.pos === id)) {
            piece = board.find(pos => pos.pos === id);

            switch (piece.piece) {
                case 'king_one':
                    return <Piece team='one' piece={piece} icon={GiChessKing} />;
                case 'queen_one':
                    return <Piece team='one' piece={piece} icon={GiQueenCrown} />;
                case 'rook_one':
                    return <Piece team='one' piece={piece} icon={GiChessRook} />;
                case 'bishop_one_1':
                    return <Piece team='one' piece={piece} icon={FaChessBishop} />;
                case 'bishop_one_2':
                    return <Piece team='one' piece={piece} icon={FaChessBishop} />;
                case 'knight_one':
                    return <Piece team='one' piece={piece} icon={GiChessKnight} />;
                case 'pawn_one':
                    return <Piece team='one' piece={piece} icon={GiChessPawn} />;
                case 'king_two':
                    return <Piece team='two' piece={piece} icon={GiChessKing} />;
                case 'queen_two':
                    return <Piece team='two' piece={piece} icon={GiQueenCrown} />;
                case 'rook_two':
                    return <Piece team='two' piece={piece} icon={GiChessRook} />;
                case 'bishop_two_1':
                    return <Piece team='two' piece={piece} icon={FaChessBishop} />;
                case 'bishop_two_2':
                    return <Piece team='two' piece={piece} icon={FaChessBishop} />;
                case 'knight_two':
                    return <Piece team='two' piece={piece} icon={GiChessKnight} />;
                case 'pawn_two':
                    return <Piece team='two' piece={piece} icon={GiChessPawn} />;
            }

        }
        return null;
    }



    return (
        <section>
            <div className='board'>

                <div className='square' id='s1'>{getPiece('s1')}</div>
                <div className='square' id='s2'>{getPiece('s2')}</div>
                <div className='square' id='s3'>{getPiece('s3')}</div>
                <div className='square' id='s4'>{getPiece('s4')}</div>
                <div className='square' id='s5'>{getPiece('s5')}</div>
                <div className='square' id='s6'>{getPiece('s6')}</div>
                <div className='square' id='s7'>{getPiece('s7')}</div>
                <div className='square' id='s8'>{getPiece('s8')}</div>
                <div className='square' id='s9'>{getPiece('s9')}</div>
                <div className='square' id='s10'>{getPiece('s10')}</div>
                <div className='square' id='s11'>{getPiece('s11')}</div>
                <div className='square' id='s12'>{getPiece('s12')}</div>
                <div className='square' id='s13'>{getPiece('s13')}</div>
                <div className='square' id='s14'>{getPiece('s14')}</div>
                <div className='square' id='s15'>{getPiece('s15')}</div>
                <div className='square' id='s16'>{getPiece('s16')}</div>
                <div className='square' id='s17'>{getPiece('s17')}</div>
                <div className='square' id='s18'>{getPiece('s18')}</div>
            </div>
        </section>
    )
}


export default Board
