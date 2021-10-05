import React,{useState} from 'react'
import Square from './Square'

import '../styles/root.scss'

const Board = ({handleOnclick,board,winnerSquares}) => {
    
    const renderSquare = position => {
 
        const isWinningSquares = winnerSquares.includes(position);
       return ( 
        <Square 
        isWinningSquares={isWinningSquares}
        value={board[position]} 
        onClick={()=>handleOnclick(position)} 
        />
       );
    }
   
    return (
        <div className="board">
           <div className="board-row">
               {renderSquare(0)}
               {renderSquare(1)}
               {renderSquare(2)}
               </div>
           <div className="board-row">
           {renderSquare(3)}
           {renderSquare(4)}
           {renderSquare(5)}
           </div>
           <div className="board-row">
           {renderSquare(6)}
           {renderSquare(7)}
           {renderSquare(8)}
           </div>
        </div>
    )
}

export default Board;
