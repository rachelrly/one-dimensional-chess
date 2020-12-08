import React, { useState, useEffect, useContext } from 'react'
import startingBoard from './starting-board.json';
import useGetPiece from '../../hooks/useGetPiece';
import '../../css/Board.css';
import Square from './Square';

function Board() {
    const [active, setActive] = useState('s1');
    const [board, setBoard] = useState([]);

    const GameContext = React.createContext({ active, board })

    useEffect(() => {
        setBoard(startingBoard);
    }, [])

    // const handleActivePiece = id => {
    //     if (!useGetPiece(id, board)) {
    //         return null;
    //     }

    //     setActive(id);
    // }

    const newBoard = [...startingBoard.slice(0, 7), { pos: 's8' }, { pos: 's9' }, { pos: 's10' }, { pos: 's11' }, ...startingBoard.slice(7)]

    return (
        <GameContext.Provider value={active, board}>
            <section>
                <div className='toggle-button-wrapper'>
                    <button>Toggle</button>
                </div>
                <div className='board'>
                    {newBoard.map(squ => {
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
