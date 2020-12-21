
export function movePiece(moveFrom, moveTo, piece, board) {
  /*This function checks if move is valid for current piece
  and if it valid is, handles movement and returns new board*/
  let valid = null;

  switch (piece.piece) {
    case 'king':
      valid = _handleKing(moveFrom, moveTo, piece, board);
      break;
    case 'queen':
      valid = _handleQueen(moveFrom, moveTo, piece, board);
      break;
    case 'rook':
      valid = _handleRook(moveFrom, moveTo, piece, board);
      break;
    case 'bishop':
      valid = _handleBishop(moveFrom, moveTo, piece, board);
      break;
    case 'knight':
      valid = _handleKnight(moveFrom, moveTo);
      break;
    case 'pawn':
      valid = _handlePawn(moveFrom, moveTo, piece);
      break;
    default: valid = false;
  }

  if (valid && board[moveTo] && board[moveFrom]) {
    if (_isOver(moveTo, board)) {
      return { board, valid, over: true }
    }
    board[moveTo].currentPiece = piece;
    board[moveFrom].currentPiece = null;


  }

  return { board, valid };
}

//moves 1 or 2 places forward when untouched
//moves 1 after touched
function _handlePawn(moveFrom, moveTo, piece) {
  if (!piece.touched) {
    let bool = null;
    if (piece.team === 'one') {
      bool = moveTo === moveFrom + 1 || moveTo === moveFrom + 2 ? true : false;
    }
    else {
      bool = moveTo === moveFrom - 1 || moveTo === moveFrom - 2 ? true : false;
    }
    if (bool) {
      piece.touched = true;
    }
    return bool;
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
function _handleKnight(moveFrom, moveTo) {
  let num = moveTo - moveFrom;
  return moveTo - moveFrom === 2 ||
    moveTo - moveFrom === 3 ||
    moveFrom - moveTo === 3 ||
    moveFrom - moveTo === 2 ? true : false;

}

//moves the same as in standard chess
function _handleRook(moveFrom, moveTo, piece, board) {
  if (moveTo > moveFrom) {
    for (let i = moveFrom + 1; i < moveTo - 1; i++) {
      if (board[i].currentPiece) {
        return false;
      }
    }
    return true;
  }

  else if (moveFrom > moveTo) {
    for (let i = moveTo + 1; i < moveFrom - 1; i++) {
      if (board[i].currentPiece) {
        return false;
      }
    }
    return true;
  }

}


// moves 1 or 2 squares in either direction
function _handleKing(moveFrom, moveTo, piece, board) {
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
function _handleQueen(moveFrom, moveTo, piece, board) {
  return _handleBishop(moveFrom, moveTo, piece, board) || _handleRook(moveFrom, moveTo, board) ? true : false;
}

//moves to squares of the same color, jumping over others
function _handleBishop(moveFrom, moveTo, piece, board) {
  //check if it is valid move
  let num = piece.team === 'one' ? moveTo - moveFrom : moveFrom - moveTo;
  if (num % 2 !== 0) {
    return false;
  }
  if (moveTo > moveFrom) {
    console.log('MOVING UP BOARD from', moveFrom, 'to', moveTo)
    for (let i = moveFrom + 1; i < moveTo - 2; i + 2) {
      if (board[i].currentPiece) {
        return false;

      }

      continue;

    }
    return true;
  }

  else if (moveFrom > moveTo) {
    console.log('MOVING DOWN BOARD from', moveFrom, 'to', moveTo)
    for (let i = moveTo + 1; i < moveFrom - 2; i + 2) {
      if (board[i].currentPiece) {
        return false
      }
      continue;

    }
    return true;
  }




}

function _isOver(moveTo, board) {
  return board[moveTo - 1].piece === 'king'
    ? board[moveTo - 1].team
    : null
}


// function _isPieceBetween(moveFrom, moveTo, piece, board) {
//   console.log('is piece between ran ', arr, 'filter:', filter)

//   if (piece.type !== 'rook') {


//   }

//   if (filter && arr.length < 2) {
//     return false;
//   }

//   console.log('started for loop')
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].currentPiece) {
//       if (arr[i].currentPiece.id === piece.id) {
//         continue;
//       }

//       moveFrom % 2 === moveTo % 2
//       console.log('HAS PIECE', arr[i].currentPiece)
//       if (filter === true) {
//         console.log('HAS PIECE IS FILTERED')
//         if (i % 2 == 0) {
//           console.log(i, i % 2)
//           console.log('RETURED FROM MOD == 0')
//           return true;
//         }
//         continue;
//       }
//       else {
//         return true;
//       }
//     }
//     else {
//       continue;
//     }
//   }
//   console.log('RETURNING FALSE, NO PIECES', filter)
//   return false;

// }
