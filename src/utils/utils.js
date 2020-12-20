
export function movePiece(moveFrom, moveTo, piece, board) {
  //indicates if move is valid for selected piece and current board
  let valid = null;

  console.log('sub board', _getSubBoard(moveFrom, moveTo, board))
  switch (piece.piece) {
    case 'king':
      valid = _handleKing(moveFrom, moveTo, piece);
      break;
    case 'queen':
      valid = _handleQueen(moveFrom, moveTo, piece);
      break;
    case 'rook':
      valid = _handleRook(moveFrom, moveTo, piece);
      break;
    case 'bishop':
      valid = _handleBishop(moveFrom, moveTo, piece);
      break;
    case 'knight':
      valid = _handleKnight(moveFrom, moveTo, piece);
      break;
    case 'pawn':
      valid = _handlePawn(moveFrom, moveTo, piece);
      break;
  }

  if (valid) {
    board[moveTo].currentPiece = piece;
    board[moveFrom].currentPiece = null;
  }

  if (_isOver(moveTo, board)) {
    return { board, valid, over: true }
  }

  return { board, valid };
}

//moves 1 or 2 places forward when untouched
//moves 1 after touched
function _handlePawn(moveFrom, moveTo, piece) {
  if (!piece.touched) {
    piece.touched = true;

    if (piece.team === 'one') {
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
function _handleKnight(moveFrom, moveTo, piece) {
  let num = moveTo - moveFrom;
  return moveTo - moveFrom === 2 ||
    moveTo - moveFrom === 3 ||
    moveFrom - moveTo === 3 ||
    moveFrom - moveTo === 2 ? true : false;

}

//moves the same as in standard chess
function _handleRook(moveFrom, moveTo, piece) {

  //check for pieces in between
  return true;

}


// moves 1 or 2 squares in either direction
function _handleKing(moveFrom, moveTo, piece) {
  //how do I add and subtract in board
  return moveTo === moveFrom + 1 ||
    moveTo === moveFrom + 2 ||
    moveTo === moveFrom - 1 ||
    moveTo === moveFrom - 2
    ? true
    : false;


}

//combined moves of rook and bishop
function _handleQueen(moveFrom, moveTo, piece) {
  //or rook
  return _handleBishop(moveFrom, moveTo, piece) ? true : false;
}

//moves to squares of the same color, jumping over others
function _handleBishop(moveFrom, moveTo, piece) {
  //check if there are squares between
  let num = piece.team === 'one' ? moveTo - moveFrom : moveFrom - moveTo;
  return num % 2 === 0 ? true : false;

}

function _isOver(moveTo, board) {
  return board[moveTo - 1].piece === 'king'
    ? board[moveTo - 1].team
    : null
}

function _getSubBoard(moveFrom, moveTo, board, limit = null) {


  //check piece at moveTo
  //do a for loop
  //reversed based on moveFrom > moveTo
  //look at piece's team 

  return moveFrom > moveTo
    ? board.slice(moveTo, moveFrom)
    : board.slice(moveFrom + 1, moveTo + 1);

}

function _isPieceBetween() {
  //split board
  //map through sub-board




}
