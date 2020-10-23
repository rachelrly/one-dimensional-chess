import React from 'react'
import { GiQueenCrown } from 'react-icons/gi'

function Queen(props) {

    const classTeam = props.team === 'white' ? 'piece white' : 'piece black';
    return (
        <div className='piece_wrapper'>
            <GiQueenCrown className={classTeam} />
        </div>
    )
}

export default Queen;
