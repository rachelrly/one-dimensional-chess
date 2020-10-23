import React from 'react'
import { GiChessKnight } from 'react-icons/gi'

function Knight(props) {

    const classTeam = props.team === 'one' ? 'piece one' : 'piece two';
    return (
        <div className='piece_wrapper'>
            <GiChessKnight className={classTeam} />
        </div>
    )
}

export default Knight;
