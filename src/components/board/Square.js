import React, { useContext, useEffect } from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import { GameContext } from '../../contexts/GameContext';
import { useMovePiece } from '../../hooks/useMovePiece';


function Square(props) {

    const { team, setTeam, setActive, active, board, setBoard } = useContext(GameContext);

    const activePiece = board.find(squ => squ.pos === active);

    let piece = useGetPiece(props.id);


    const handleClick = (e) => {
        e.stopPropagation();

        if (props.id == active) {
            return null;
        }
        console.log(props.id);
        //select other piece from team
        if (piece && piece.props.team === team) {
            setActive(props.id);
        }
        //if there is an active piece selecting an empty square 
        else if (!piece && active) {
            setBoard(movePawn(active - 1, props.id, activePiece.currentPiece, board));
            const newTeam = team === 'one' ? 'two' : 'one';
            setTeam(newTeam);
            setActive(null);
        }
        else {
            return null;
        }
    }

    return (
        <div
            onClick={(e) => handleClick(e)}
            className={`${active === props.id ? 'active' : null} square`}
            id={props.id}>
            {piece}
        </div>
    );
};

export default Square;

function movePawn(moveFrom, moveTo, piece, board) {
    if (moveFrom == moveTo) {
        return board;
    }
    console.log(`Move from ${moveFrom} to ${moveTo}`)
    board[moveTo].currentPiece = piece;
    board[moveFrom].currentPiece = null;

    return board;
}