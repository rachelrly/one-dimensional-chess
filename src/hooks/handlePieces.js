import React, { useState, useContext } from 'react';
import {GameContext} from '../contexts/GameContext';


export function useMovePawn(moveTo, piece) {
    const [touched, setTouched] = useState(false);

    const {setActive} = useContext(GameContext);
//if checking movement not moving
    if(!touched){
        //set piece.pos + 2 || piece.pos + 1 to active
        //add class of active to display with outline
        //push values into active array

    }

    // get piece at location
    // move to new location
    // handle piece movement

    //piece.piece type

    //setTeam

    //get piece from useGetPiece
    //onMove, direct accordingly

    console.log('moved pawn')



}


export function useMoveBishop(moveTo, piece){

    console.log('moved bishop')
    return piece;
}

export function useMoveRook(moveTo, piece){

    console.log('moved rook')
    return piece;
}

export function useMoveKing(moveTo, piece){
    console.log('moved king')

    return piece;
}

export function useMoveQueen(moveTo, piece){
    console.log('moved queen')

    return piece;
}

export function useMoveKnight(moveTo, piece){
    console.log('moved knight')

    return piece;
}
