import React, { useContext, useRef, useEffect } from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import { GameContext } from '../../contexts/GameContext';
import { movePiece } from '../../utils/utils';
import StartingBoard from '../../starting-board.json';


function Square(props) {
    const { team, setActive, active, dispatch, board } = useContext(GameContext);
    let piece = useGetPiece(props.id);
    let clickRef = useRef(props.id);

    const activePiece = board.find(squ => squ.pos === active).currentPiece;

    useEffect(() => { }, [active])

    const handleClick = (e) => {
        if (props.id === active) {
            return null;
        }
        else if (!piece && !active) {
            return null;
        }
        //select other piece from team
        if (piece && piece.props.team === team) {
            //if clicked on piece from same team, switch focus
            setActive(Number(clickRef.current.id));
        }
        else if (piece && active && piece.props.team !== team) {
            //if clicked on piece of other piece, validate move
            dispatch({
                type: board[active - 1].currentPiece.piece,
                payload: { moveFrom: active - 1, moveTo: Number(clickRef.current.id) - 1, board, piece: activePiece }
            });

        }
        //if there is an active piece selecting an empty square 
        else if (!piece && active) {
            dispatch({
                type: board[active - 1].currentPiece.piece,
                payload: { moveFrom: active - 1, moveTo: Number(clickRef.current.id) - 1, board, piece: activePiece }
            });
        }
        else {
            return null;
        }
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    }

    return (
        <div
            ref={clickRef}
            onClickCapture={(e) => handleClick(e)}
            tabIndex='0'
            onKeyPress={e => handleKeyPress(e)}
            className={`${active === props.id ? 'active' : null} ${team} square`}
            id={props.id}>
            {piece}
        </div>
    );
};

export default Square;

