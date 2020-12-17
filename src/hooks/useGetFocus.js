// import { useContext } from 'react';
// import { GameContext } from '../contexts/GameContext';

//consider passing in these values rather than using context to make this more flexible


// export function useGetFocus() {
//   const { team, board } = useContext(GameContext);

//   let len = board.length / 2;

//   if (team === 'one') {
//     let sub = board.slice(0, len);

//     for (let i = len; i >= 0; i--) {
//       if (sub[i].currentPiece) {
//         return i;
//       }
//     }
//   } else {
//     let sub = board.slice(len + 1, board.length)

//     for (let i = 0; i < sub.length; i++) {
//       if (sub[i].currentPiece) {
//         return i;
//       }
//     }
//   }

// }

function findFocusElement() {

}