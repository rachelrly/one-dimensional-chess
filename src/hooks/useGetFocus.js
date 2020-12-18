

//consider passing in these values rather than using context to make this more flexible


export function useGetFocus(team, board) {
  if (team === 'one') {
    //start at end and look for piece

    for (let i = board.length; i > 0; i--) {

      if (board[i]) {
        if (board[i].currentPiece && board[i].currentPiece.team === 'one') {
          return board[i].pos;
        }
      }
    }



  } else {
    for (let i = 0; i < board.length; i++) {
      if (board[i]) {
        if (board[i].currentPiece && board[i].currentPiece.team === 'two') {
          console.log('current team', board[i].currentPiece.team)

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

}
