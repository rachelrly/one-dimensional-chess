import React from 'react';

function Piece(props) {
    /*Renders piece iocn from hook*/
    return (
        <div className='piece_wrapper'>
            <props.icon
                className={`piece ${props.team} ${props.classes}`}
            />
        </div>
    );
};

Piece.defaultProps = {
    style: 'null',
};

export default Piece;