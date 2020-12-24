import React, { useContext, useRef } from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import { GameContext } from '../../contexts/GameContext';
import { movePiece } from '../../utils/utils';
import StartingBoard from '../../starting-board.json';


function Square(props) {
    const { team, setTeam, setActive, active, board, setBoard, setPlaying, resetBoard } = useContext(GameContext);
    const activePiece = board.find(squ => squ.pos === active);
    let piece = useGetPiece(props.id);
    let clickRef = useRef(props.id);

    const handleClick = (e) => {
        if (props.id === active) {
            return null;
        }
        else if (!piece && !active) {
            return null;
        }
        //select other piece from team
        if (piece && piece.props.team === team) {

            setActive(Number(clickRef.current.id));
        }
        else if (piece && active && piece.props.team !== team) {
            let res = movePiece(active - 1, Number(clickRef.current.id) - 1, activePiece.currentPiece, board);

            if (res.valid) {
                if (res.over) {
                    setBoard(StartingBoard)
                    setPlaying('review');
                    return;
                }
                setBoard(res.board);
                const newTeam = team === 'one' ? 'two' : 'one';
                setTeam(newTeam);
                setActive(null);
            }
        }
        //if there is an active piece selecting an empty square 
        else if (!piece && active) {
            let res = movePiece(active - 1, Number(clickRef.current.id) - 1, activePiece.currentPiece, board);
            if (res.valid) {
                if (res.over) {
                    setBoard(StartingBoard);
                    setPlaying('review');
                    return;
                }
                setBoard(res.board);
                const newTeam = team === 'one' ? 'two' : 'one';
                setTeam(newTeam);
                setActive(null);
            }
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

