import React from 'react'
import { GiChessRook } from 'react-icons/gi'

function Rook(props) {

    const classTeam = props.team === 'white' ? 'piece white rook' : 'piece black rook';
    return (
        <div className='piece_wrapper'>
            <GiChessRook className={classTeam} />
        </div>
    )
}

export default Rook;