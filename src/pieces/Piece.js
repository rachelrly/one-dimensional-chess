import React, { useState } from 'react';


function Piece(props) {
    const active = true;
    //use effect to determine if piece is active
    const classTeam = props.team === 'one' ? `piece one ${props.styleClass} ${active}` : `piece two  ${props.styleClass} ${active}`;

    return (
        <div className='piece_wrapper'>
            <props.icon className={classTeam} />
        </div>
    )
}

Piece.defaultProps = {
    style: 'null',
};

export default Piece;