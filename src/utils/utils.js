
export function movePiece(moveFrom, moveTo, piece, board) {

  let valid = null;

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

  return { board, valid };
}


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

function _handleKnight(moveFrom, moveTo, piece) {
  let num = moveTo - moveFrom;
  return moveTo - moveFrom === 2 ||
    moveTo - moveFrom === 3 ||
    moveFrom - moveTo === 3 ||
    moveFrom - moveTo === 2 ? true : false;

}

function _handleRook(moveFrom, moveTo, piece) {

  //check for pieces in between
  return true;

}

function _handleKing(moveFrom, moveTo, piece) {
  //how do I add and subtract in board
  return moveTo === moveFrom + 1 ||
    moveTo === moveFrom + 2 ||
    moveTo === moveFrom - 1 ||
    moveTo === moveFrom - 2
    ? true
    : false;


}

function _handleQueen(moveFrom, moveTo, piece) {
  //or rook
  return _handleBishop(moveFrom, moveTo, piece) ? true : false;
}


function _handleBishop(moveFrom, moveTo, piece) {
  //check if there are squares between
  let num = piece.team === 'one' ? moveTo - moveFrom : moveFrom - moveTo;
  return num % 2 === 0 ? true : false;

}

function _isPieceBetween() {

}
