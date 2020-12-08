import React, { useState, useEffect, useContext } from 'react'
import startingBoard from './starting-board.json';
import useGetPiece from './useGetPiece';
import '../../css/Board.css';
//import Square from './Square';




function Board() {
    const [active, setActive] = useState('s1');
    const [board, setBoard] = useState([]);



    const GameContext = React.createContext({ active, board })


    useEffect(() => {
        setBoard(startingBoard);

    }, [])


    console.log('BOARD', board)
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    // const boardJsx = arr.map((index) => {
    //     const id = `s${index + 1}`
    //     return <Square borad={board} id={id} setActive={() => setActive(id)} />
    // })
    //I can loop through the boarrd to find current pos 
    return (
        <GameContext.Provider value={active, board}>
            <section>

                <div className='board'>

                    <div onClick={() => setActive('s1')} className={`${active === 's1' ? 'active' : null} square`} id='s1'>{useGetPiece('s1', board)}</div>
                    <div onClick={() => setActive('s2')} className={`${active === 's2' ? 'active' : null} square`} id='s2'>{useGetPiece('s2', board)}</div>
                    <div onClick={() => setActive('s3')} className={`${active === 's3' ? 'active' : null} square`} id='s3'>{useGetPiece('s3', board)}</div>
                    <div onClick={() => setActive('s4')} className={`${active === 's4' ? 'active' : null} square`} id='s4'>{useGetPiece('s4', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's5' ? 'active' : null} square`} id='s5'>{useGetPiece('s5', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's6' ? 'active' : null} square`} id='s6'>{useGetPiece('s6', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's7' ? 'active' : null} square`} id='s7'>{useGetPiece('s7', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's8' ? 'active' : null} square`} id='s8'>{useGetPiece('s8', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's9' ? 'active' : null} square`} id='s9'>{useGetPiece('s9', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's10' ? 'active' : null} square`} id='s10'>{useGetPiece('s10', board)}</div>
                    <div onClick={() => setActive('s1')} className={`${active === 's11' ? 'active' : null} square`} id='s11'>{useGetPiece('s11', board)}</div>
                    <div className={`${active === 's12' ? 'active' : null} square`} id='s12'>{useGetPiece('s12', board)}</div>
                    <div className={`${active === 's13' ? 'active' : null} square`} id='s13'>{useGetPiece('s13', board)}</div>
                    <div className={`${active === 's14' ? 'active' : null} square`} id='s14'>{useGetPiece('s14', board)}</div>
                    <div className={`${active === 's15' ? 'active' : null} square`} id='s15'>{useGetPiece('s15', board)}</div>
                    <div className={`${active === 's16' ? 'active' : null} square`} id='s16'>{useGetPiece('s16', board)}</div>
                    <div className={`${active === 's17' ? 'active' : null} square`} id='s17'>{useGetPiece('s17', board)}</div>
                    <div className={`${active === 's18' ? 'active' : null} square`} id='s18'>{useGetPiece('s18', board)}</div>
                </div>
            </section>
        </GameContext.Provider>)
}
export default Board
