
/* This file has all the helper functions that control validating the movement of each piece.
These functions are called in the reducer in GameContext. */

//moves 1 or 2 places forward when untouched
//moves 1 after touched
export function handlePawn(moveFrom, moveTo, piece) {
  if (!piece.touched) {
    console.log('NOT TOUCHED RAN')
    if (piece.team === 'one') {
      console.log('RETURNING FROM P1 NOT TOUCHED', moveTo === moveFrom + 1 || moveTo === moveFrom + 2 ? true : false)
      return moveTo === moveFrom + 1 || moveTo === moveFrom + 2 ? true : false;
    }
    else {
      return moveTo === moveFrom - 1 || moveTo === moveFrom - 2 ? true : false;
    }
  }
  else {
    if (piece.team === 'one') {
      return moveTo === moveFrom + 1 ? true : false;
    }
    else {
      return moveTo === moveFrom - 1 ? true : false;
    }
  }
}





//moves two or three squares, jumping over others
export function handleKnight(moveFrom, moveTo) {
  let num = moveTo - moveFrom;
  return moveTo - moveFrom === 2 ||
    moveTo - moveFrom === 3 ||
    moveFrom - moveTo === 3 ||
    moveFrom - moveTo === 2 ? true : false;

}




//moves the same as in standard chess
export function handleRook(moveFrom, moveTo, board) {
  if (moveTo > moveFrom) {
    let b = board.slice(moveFrom + 1, moveTo);
    return b.find(b => b.currentPiece) ? false : true;
  }
  else {
    let b = board.slice(moveTo + 1, moveFrom);
    return b.find(b => b.currentPiece) ? false : true;
  }
}




// moves 1 or 2 squares in either direction
export function handleKing(moveFrom, moveTo, board) {
  if (moveTo === moveFrom + 1 || moveTo === moveFrom - 1) {
    return true;
  }
  else if (moveTo === moveFrom + 2 || moveTo === moveFrom - 2) {
    let mid = moveTo > moveFrom ? moveFrom + 1 : moveFrom - 1;
    return board[mid - 1].currentPiece ? false : true;

  }
  else {
    return false;
  }
}





//combined moves of rook and bishop
export function handleQueen(moveFrom, moveTo, piece, board) {
  return handleBishop(moveFrom, moveTo, piece, board) || handleRook(moveFrom, moveTo, board) ? true : false;
}





//moves to squares of the same color, jumping over others
export function handleBishop(moveFrom, moveTo, piece, board) {
  //check if it is valid move
  let num = piece.team === 'one' ? moveTo - moveFrom : moveFrom - moveTo;
  if (num % 2 !== 0) {
    return false;
  }
  if (moveTo > moveFrom) {
    let b = board.slice(moveFrom + 1, moveTo);
    return b.find(b => b.currentPiece && b.pos % 2 !== moveFrom % 2) ? false : true;
  }
  else {
    let b = board.slice(moveTo + 1, moveFrom);
    return b.find(b => b.currentPiece && b.pos % 2 !== moveFrom % 2) ? false : true;
  }

}

