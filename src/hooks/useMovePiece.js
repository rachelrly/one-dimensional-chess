// import { useContext } from 'react';
// import { GameContext } from '../contexts/GameContext';

// export function useMovePiece(moveTo) {
//     //get piece from active
//     const { setActive, active, board, setBoard } = useContext(GameContext);
//     const { piece } = board.find(squ => squ.pos === active)
//     //setActive(null)
//     return setBoard(movePawn(moveTo, piece, board));
//     // switch (piece.piece) {
//     //     case 'king':
//     //         return moveKing(moveTo, piece);
//     //     case 'queen':
//     //         return moveQueen(moveTo, piece);
//     //     case 'rook':
//     //         return moveRook(moveTo, piece);
//     //     case 'bishop':
//     //         return moveBishop(moveTo, piece);
//     //     case 'knight':
//     //         return moveKnight(moveTo, piece);
//     //     case 'pawn':
//     //         //set board to wrap movePiece
//     //         return setBoard(movePawn(moveTo, piece, board));
//     // }
// };