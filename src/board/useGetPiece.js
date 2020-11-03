//import { useState, useEffect } from 'react';
import { GiChessKing, GiChessPawn, GiQueenCrown, GiChessRook, GiChessKnight } from 'react-icons/gi';
import { FaChessBishop } from 'react-icons/fa';
import Piece from './Piece'

function useGetPiece(id, board) {
    let piece = {};
    if (board.find(pos => pos.pos === id)) {
        piece = board.find(pos => pos.pos === id);

        switch (piece.piece) {
            case 'king_one':
                return <Piece team='one' piece={piece} icon={GiChessKing} />;
            case 'queen_one':
                return <Piece team='one' piece={piece} icon={GiQueenCrown} />;
            case 'rook_one':
                return <Piece team='one' piece={piece} icon={GiChessRook} styleClass='rook' />;
            case 'bishop_one_1':
                return <Piece team='one' piece={piece} icon={FaChessBishop} styleClass='bishop' />;
            case 'bishop_one_2':
                return <Piece team='one' piece={piece} icon={FaChessBishop} styleClass='bishop' />;
            case 'knight_one':
                return <Piece team='one' piece={piece} icon={GiChessKnight} />;
            case 'pawn_one':
                return <Piece team='one' piece={piece} icon={GiChessPawn} />;
            case 'king_two':
                return <Piece team='two' piece={piece} icon={GiChessKing} />;
            case 'queen_two':
                return <Piece team='two' piece={piece} icon={GiQueenCrown} />;
            case 'rook_two':
                return <Piece team='two' piece={piece} icon={GiChessRook} styleClass='rook' />;
            case 'bishop_two_1':
                return <Piece team='two' piece={piece} icon={FaChessBishop} styleClass='bishop' />;
            case 'bishop_two_2':
                return <Piece team='two' piece={piece} icon={FaChessBishop} styleClass='bishop' />;
            case 'knight_two':
                return <Piece team='two' piece={piece} icon={GiChessKnight} />;
            case 'pawn_two':
                return <Piece team='two' piece={piece} icon={GiChessPawn} />;
        }

    }
    return null;
}

export default useGetPiece;