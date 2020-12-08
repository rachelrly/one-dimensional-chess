import React from 'react'
import { GiChessRook } from 'react-icons/gi'

function Rook(props) {

    const classTeam = props.team === 'one' ? 'piece one rook' : 'piece two rook';
    return (
        <div className='piece_wrapper'>
            <GiChessRook className={classTeam} />
        </div>
    )
}

export default Rook;