import { GiChessKing, GiChessPawn, GiQueenCrown, GiChessRook, GiChessKnight } from 'react-icons/gi';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { FaChessBishop } from 'react-icons/fa';
import Piece from '../components/board/Piece'

function useGetPiece(id) {
    /*This component returns the piece at given board position*/

    const { board } = useContext(GameContext)

    const { currentPiece } = board.find(pos => pos.pos === id);

    if (!currentPiece) {
        return null;
    }

    switch (currentPiece.piece) {
        case 'king':
            return <Piece {...currentPiece} icon={GiChessKing} />;
        case 'queen':
            return <Piece {...currentPiece} icon={GiQueenCrown} />;
        case 'rook':
            return <Piece {...currentPiece} icon={GiChessRook} styleClass='rook' />;
        case 'bishop':
            return <Piece {...currentPiece} icon={FaChessBishop} styleClass='bishop' />;
        case 'knight':
            return <Piece {...currentPiece} icon={GiChessKnight} />;
        case 'pawn':
            return <Piece {...currentPiece} icon={GiChessPawn} />;
    }

    return null;
}

export default useGetPiece;