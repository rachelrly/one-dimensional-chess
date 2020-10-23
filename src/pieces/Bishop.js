import React from 'react';
import { FaChessBishop } from 'react-icons/fa';

function Bishop(props) {
    const classTeam = props.team === 'white' ? 'piece white bishop' : 'piece black bishop';
    return (
        <div className='piece_wrapper'>
            <FaChessBishop className={classTeam} />
        </div>
    )
}

export default Bishop;