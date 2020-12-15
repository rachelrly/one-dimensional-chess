import React, {useContext} from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import {GameContext} from '../../contexts/GameContext';
import {useMovePiece} from '../../hooks/useMovePiece';


function Square(props) {
    const piece = useGetPiece(props.id);
    const {team, setActive, active} = useContext(GameContext);
  
    return (
        <div
            onClick={() => piece.props.team === team ? setActive(props.id) : null}
            className={`${active === props.id ? 'active' : null} square`}
            id={props.id}>
            {piece}
        </div>
    );
};

export default Square;
