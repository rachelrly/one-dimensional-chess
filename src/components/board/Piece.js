import React, { useState } from 'react';

function Piece(props) {
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