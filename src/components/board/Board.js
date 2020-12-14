import React, { useState, useEffect, useContext } from 'react'
import startingBoard from '../../starting-board.json';
import useGetPiece from '../../hooks/useGetPiece';
import '../../css/Board.css';
import Square from './Square';

function Board() {
    // active[0] is always id of current piece
    const [active, setActive] = useState([1]);
    const [board, setBoard] = useState([]);

    const GameContext = React.createContext({ active })

    useEffect(() => {
        setBoard(startingBoard);
    }, []);

    //this sets up the board with the pieces in place and four empty squares in the middle
    const displayBoard = [...startingBoard.slice(0, 7), 
        { pos: 8 }, 
        { pos: 9}, 
        { pos: 10 }, 
        { pos: 11}, 
        ...startingBoard.slice(7)]

    return (
        <GameContext.Provider value={active}>
            <section>
                <div className='toggle-button-wrapper'>
                    <button>Toggle</button>
                </div>
                <div className='board'>
                    {displayBoard.map(squ => {
                        return <Square
                            active={active}
                            board={board}
                            key={squ.pos}
                            id={squ.pos}
                            setActive={() => setActive(squ.pos)} />
                    })}
                </div>
            </section>
        </GameContext.Provider>)
}
export default Board
