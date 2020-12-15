import React, { useState } from 'react';

function Piece(props) {
    //piece.pos
    //piece.piece
    console.log('from piece',props)
    return (
        <div className='piece_wrapper'>
            <props.icon
                className={`piece ${props.team} ${props.styleClass}`}
            />
        </div>
    )
}

Piece.defaultProps = {
    style: 'null',
};

export default Piece;