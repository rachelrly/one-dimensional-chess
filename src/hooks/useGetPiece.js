import { GiChessKing, GiChessPawn, GiQueenCrown, GiChessRook, GiChessKnight } from 'react-icons/gi';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { FaChessBishop } from 'react-icons/fa';
import Piece from '../components/board/Piece';

function useGetPiece(id) {
    /*This component returns the piece at given board position*/
    const { board } = useContext(GameContext);
    const { currentPiece } = board.find(pos => pos.pos === id);

    if (!currentPiece) {
        return null;
    }

    switch (currentPiece.piece) {
        case 'king':
            return <Piece {...currentPiece} icon={GiChessKing} classes={`${currentPiece.name}`} />;
        case 'queen':
            return <Piece {...currentPiece} icon={GiQueenCrown} classes={`${currentPiece.name}`} />;
        case 'rook':
            return <Piece {...currentPiece} icon={GiChessRook} classes={`rook ${currentPiece.name}`} />;
        case 'bishop':
            return <Piece {...currentPiece} icon={FaChessBishop} classes={`bishop ${currentPiece.name}`} />;
        case 'knight':
            return <Piece {...currentPiece} icon={GiChessKnight} classes={`${currentPiece.name}`} />;
        case 'pawn':
            return <Piece {...currentPiece} icon={GiChessPawn} classes={`${currentPiece.name}`} />;
        default: return null;
    }

}

export default useGetPiece;