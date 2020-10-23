import React from 'react'
import { GiChessPawn } from 'react-icons/gi'

function Pawn(props) {
    const classTeam = props.team === 'one' ? 'piece one' : 'piece two';
    const highlight = () => {
        return true;
    }
    return (
        <div
            className='piece_wrapper'
            onClick={highlight}
        >
            <GiChessPawn className={classTeam} />
        </div>
    )
}

export default Pawn;