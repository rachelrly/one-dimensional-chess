import { useContext} from 'react';
import {GameContext} from '../contexts/GameContext';
import {useMoveBishop, useMoveKing, useMoveKnight, useMovePawn, useMoveQueen, useMoveRook} from './handlePieces';

export function useMovePiece(moveTo, piece) {
    const {setActive} = useContext(GameContext);

    setActive(null)

    // switch (piece.piece) {
    //     case 'king':
    //         return useMoveKing(moveTo, piece);
    //     case 'queen':
    //         return useMoveQueen(moveTo, piece);
    //     case 'rook':
    //         return useMoveRook(moveTo, piece);
    //     case 'bishop':
    //         return useMoveBishop(moveTo, piece);
    //     case 'knight':
    //         return useMoveKnight(moveTo, piece);
    //     case 'pawn':
    //         return useMovePawn(moveTo, piece);
    // }
};