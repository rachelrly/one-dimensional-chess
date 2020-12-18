/*This hook finds the element on the current team that is closest to the opposite end*/

export function useGetFocus(team, board) {
  if (team === 'one') {
    //start at end and look for piece
    for (let i = board.length; i > 0; i--) {
      if (board[i]) {
        if (board[i].currentPiece && board[i].currentPiece.team === 'one') {
          return board[i].pos;
        }
        else {
          continue;
        }
      }
    }

    return null;

  } else {
    //start at beginning and look for first piece
    for (let i = 0; i < board.length; i++) {
      if (board[i]) {
        if (board[i].currentPiece && board[i].currentPiece.team === 'two') {
          return board[i].pos;
        }
        else {
          continue;
        }
      }
      else {
        continue;
      }
    }
  }

  return null;

}
