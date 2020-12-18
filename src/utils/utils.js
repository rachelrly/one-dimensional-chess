
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

  return board;
}


function _handlePawn(moveFrom, moveTo, piece) {
  console.log('pawn handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}

function _handleKnight(moveFrom, moveTo, piece) {
  console.log('knight handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}

function _handleRook(moveFrom, moveTo, piece) {
  console.log('rook handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}

function _handleKing(moveFrom, moveTo, piece) {
  console.log('King handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}

function _handleQueen(moveFrom, moveTo, piece) {
  console.log('queen handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}


function _handleBishop(moveFrom, moveTo, piece) {
  console.log('bishop handled')
  if (!piece.touched) {
    piece.touched = true;

    if (moveTo === moveFrom + 1 || moveTo === moveFrom + 2) {

    }

  }
  return true;
}
