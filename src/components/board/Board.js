import React, { useState, useEffect} from 'react'
import startingBoard from '../../starting-board.json';
import '../../css/Board.css';
import Square from './Square';

function Board() {
    const [active, setActive] = useState(1);
    const [board, setBoard] = useState([]);

    useEffect(() => {
        setBoard(startingBoard);
    }, []);

    return (
            <section>
                <div className='toggle-button-wrapper'>
                    <button>Toggle</button>
                </div>
                <div className='board'>
                    {startingBoard.map(squ => {
                        return <Square
                            active={active}
                            board={board}
                            key={squ.pos}
                            id={squ.pos}
                            setActive={() => setActive(squ.pos)} />
                    })}
                </div>
            </section>
        )
}
export default Board
