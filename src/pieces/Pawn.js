import React from 'react'
import { GiChessPawn } from 'react-icons/gi'

function Pawn(props) {
    const classTeam = props.team === 'white' ? 'piece white' : 'piece black';

    return (
        <div className='piece_wrapper'>
            <GiChessPawn className={classTeam} />
        </div>
    )
}

export default Pawn;