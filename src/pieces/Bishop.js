import React from 'react';
import { FaChessBishop } from 'react-icons/fa';

function Bishop(props) {
    const classTeam = props.team === 'one' ? 'piece one bishop' : 'piece two bishop';
    return (
        <div className='piece_wrapper'>
            <FaChessBishop className={classTeam} />
        </div>
    )
}

export default Bishop;