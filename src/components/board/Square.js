import React, {useContext} from 'react';
import useGetPiece from '../../hooks/useGetPiece';
import {store} from '../../store';


function Square(props) {
    const piece = useGetPiece(props.id, props.board);
    const {state} = useContext(store);
  
    return (
        <div
            onClick={() => piece && state.team === piece.team ? props.setActive() : null}
            className={`${state.active === props.id ? 'active' : null} square`}
            id={props.id}>
            {piece}
        </div>
    );
};

export default Square;
