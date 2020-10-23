import React from 'react';
import { GiChessKing } from 'react-icons/gi';

function King(props) {
    const classTeam = props.team === 'white' ? 'piece white' : 'piece black';
    return (
        <div className='piece_wrapper'>
            <GiChessKing className={classTeam} />
        </div>
    )
}

export default King;
