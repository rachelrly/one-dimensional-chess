import React from 'react'
import useGetPiece from '../../hooks/useGetPiece'

function Square(props) {
    const piece = useGetPiece(props.id, props.board)
    return (
        <div
            onClick={() => piece ? props.setActive() : null}
            className={`${props.active === props.id ? 'active' : null} square`}
            id={props.id}>
            {piece}
        </div>
    )
}

export default Square
