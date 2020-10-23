import React from 'react';


function Piece(props) {

    const classTeam = props.team === 'one' ? `piece one ${props.style}` : `piece two  ${props.style}`;

    return (
        <div className='piece_wrapper'>
            <props.icon className={classTeam} />
        </div>
    )
}

Piece.defaultProps = {
    style: null,
};

export default Piece;