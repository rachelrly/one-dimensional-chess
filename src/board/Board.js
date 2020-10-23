import React, { Component } from 'react'
import './Board.css'
import Piece from '../pieces/Piece'
import { GiChessKing, GiChessPawn, GiQueenCrown, GiChessRook, GiChessKnight } from 'react-icons/gi';
import { FaChessBishop } from 'react-icons/fa';


class Board extends Component {

    constructor() {
        super();

        this.state = {
            position: [
                {
                    piece: "king_one",
                    pos: "s1"
                },
                {
                    piece: "queen_one",
                    pos: "s2"
                },
                {
                    piece: "rook_one",
                    pos: "s3"
                },
                {
                    piece: "bishop_one_1",
                    pos: "s4"
                },
                {
                    piece: "bishop_one_2",
                    pos: "s5"
                },
                {
                    piece: "knight_one",
                    pos: "s6"
                },
                {
                    piece: "pawn_one",
                    pos: "s7"
                },
                {
                    piece: "king_two",
                    pos: "s18"
                },
                {
                    piece: "queen_two",
                    pos: "s17"
                },
                {
                    piece: "rook_two",
                    pos: "s16"
                },
                {
                    piece: "bishop_two_1",
                    pos: "s15"
                },
                {
                    piece: "bishop_two_2",
                    pos: "s14"
                },
                {
                    piece: "knight_two",
                    pos: "s13"
                },
                {
                    piece: "pawn_two",
                    pos: "s12"
                }]
        }
    }

    getPiece = (id) => {
        let piece = {};
        if (this.state.position.find(pos => pos.pos === id)) {
            piece = this.state.position.find(pos => pos.pos === id);

            switch (piece.piece) {
                case 'king_one':
                    return <Piece team='one' piece={piece} icon={GiChessKing} />;
                case 'queen_one':
                    return <Piece team='one' piece={piece} icon={GiQueenCrown} />;
                case 'rook_one':
                    return <Piece team='one' piece={piece} icon={GiChessRook} style='rook' />;
                case 'bishop_one_1':
                    return <Piece team='one' piece={piece} icon={FaChessBishop} style='bishop' />;
                case 'bishop_one_2':
                    return <Piece team='one' piece={piece} icon={FaChessBishop} style='bishop' />;
                case 'knight_one':
                    return <Piece team='one' piece={piece} icon={GiChessKnight} />;
                case 'pawn_one':
                    return <Piece team='one' piece={piece} icon={GiChessPawn} />;
                case 'king_two':
                    return <Piece team='two' piece={piece} icon={GiChessKing} />;
                case 'queen_two':
                    return <Piece team='two' piece={piece} icon={GiQueenCrown} />;
                case 'rook_two':
                    return <Piece team='two' piece={piece} icon={GiChessRook} style='rook' />;
                case 'bishop_two_1':
                    return <Piece team='two' piece={piece} icon={FaChessBishop} style='bishop' />;
                case 'bishop_two_2':
                    return <Piece team='two' piece={piece} icon={FaChessBishop} style='bishop' />;
                case 'knight_two':
                    return <Piece team='two' piece={piece} icon={GiChessKnight} />;
                case 'pawn_two':
                    return <Piece team='two' piece={piece} icon={GiChessPawn} />;
            }

        }
        return null;
    }


    render() {




        return (
            <section>
                <div className='board'>
                    <div className='square' id='s1'>{this.getPiece('s1')}</div>
                    <div className='square' id='s2'>{this.getPiece('s2')}</div>
                    <div className='square' id='s3'>{this.getPiece('s3')}</div>
                    <div className='square' id='s4'>{this.getPiece('s4')}</div>
                    <div className='square' id='s5'>{this.getPiece('s5')}</div>
                    <div className='square' id='s6'>{this.getPiece('s6')}</div>
                    <div className='square' id='s7'>{this.getPiece('s7')}</div>
                    <div className='square' id='s8'>{this.getPiece('s8')}</div>
                    <div className='square' id='s9'>{this.getPiece('s9')}</div>
                    <div className='square' id='s10'>{this.getPiece('s10')}</div>
                    <div className='square' id='s11'>{this.getPiece('s11')}</div>
                    <div className='square' id='s12'>{this.getPiece('s12')}</div>
                    <div className='square' id='s13'>{this.getPiece('s13')}</div>
                    <div className='square' id='s14'>{this.getPiece('s14')}</div>
                    <div className='square' id='s15'>{this.getPiece('s15')}</div>
                    <div className='square' id='s16'>{this.getPiece('s16')}</div>
                    <div className='square' id='s17'>{this.getPiece('s17')}</div>
                    <div className='square' id='s18'>{this.getPiece('s18')}</div>
                </div>
            </section>
        )
    }
}

export default Board
