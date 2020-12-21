
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
      valid = _handleRook(moveFrom, moveTo, board);
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
    if (_isOver(moveFrom, moveTo, board)) {
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
function _handleRook(moveFrom, moveTo, board) {
  if (moveTo > moveFrom) {
    let b = board.slice(moveFrom + 1, moveTo);
    return b.find(b => b.currentPiece) ? false : true;
  }
  else {
    let b = board.slice(moveTo, moveFrom);
    return b.find(b => b.currentPiece) ? false : true;
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
    let b = board.slice(moveFrom + 1, moveTo);
    return b.find(b => b.currentPiece && b.pos % 2 !== moveFrom % 2) ? false : true;
  }
  else {
    let b = board.slice(moveTo + 1, moveFrom);
    return b.find(b => b.currentPiece && b.pos % 2 !== moveFrom % 2) ? false : true;
  }

}

function _isOver(moveFrom, moveTo, board) {

  if (moveTo > moveFrom) {
    return board[moveTo - 1].piece === 'king'
      ? board[moveTo - 1].team
      : null
  }
  else {
    return board[moveTo].piece === 'king'
      ? board[moveTo].team
      : null
  }

}
