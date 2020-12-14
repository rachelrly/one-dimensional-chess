import React, { useState } from 'react';

function Piece(props) {
    //piece.pos
    //piece.piece
    return (
        <div className='piece_wrapper'>
            <props.icon
                className={props.team === 'one'
                    ? `piece one ${props.styleClass}`
                    : `piece two  ${props.styleClass}`}
            />
        </div>
    )
}

Piece.defaultProps = {
    style: 'null',
};

export default Piece;