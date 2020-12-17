import React, { useContext, useRef } from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import { GameContext } from '../../contexts/GameContext';
import { useMovePiece } from '../../hooks/useMovePiece';


function Square(props) {

    const { team, setTeam, setActive, active, board, setBoard } = useContext(GameContext);

    const activePiece = board.find(squ => squ.pos === active);

    let piece = useGetPiece(props.id);

    let clickRef = useRef(props.id)

    const handleClick = (e) => {
        e.stopPropagation();


        if (props.id === active) {
            return null;
        }

        //select other piece from team
        if (piece && piece.props.team === team) {
            setActive(Number(clickRef.current.id));
        }
        //if there is an active piece selecting an empty square 
        else if (!piece && active) {
            setBoard(movePiece(active - 1, Number(clickRef.current.id) - 1, activePiece.currentPiece, board));
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
            ref={clickRef}
            onClickCapture={(e) => handleClick(e)}
            className={`${active === props.id ? 'active' : null} square`}
            id={props.id}>
            {piece}
        </div>
    );
};

export default Square;

function movePiece(moveFrom, moveTo, piece, board) {


    //call other functions that check if piece cam move
    console.log(`Move from ${moveFrom} to ${moveTo}`)
    board[moveTo].currentPiece = piece;
    board[moveFrom].currentPiece = null;

    return board;
}

function handlePawn(moveFrom, moveTo, piece) {
    if (!piece.touched) {


        piece.touched = true;

        if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

        }

    }


}