import React from 'react'
import useGetPiece from './useGetPiece'

function Square(props) {
    console.log('board from square', props.board)
    return (
        <div
            onClick={() => props.setActive()}
            className={`${props.active === props.id ? 'active' : null} square`}
            id={props.id}>
            {useGetPiece(props.id, props.board)}
        </div>
    )
}

export default Square
