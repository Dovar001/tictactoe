import React,{useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/helpers";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import './styles/root.scss'

const App = () => {

  const NEW_GAME = [{board:Array(9).fill(null),isXNext:true}];

  const [history, setHistory] = useState(NEW_GAME)

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
 
   const {winner,winnerSquares} = calculateWinner(current.board);
   
  

  const handleOnclick = (position) => {
    if (current.board[position] || winner){
          return;
       }
       setHistory(prev=>{

        const last = prev[prev.length-1];
        

     const newBoard =  last.board.map((square,pos)=>{
         if(pos===position){
            return last.isXNext ? 'X':'O' 
         }
         return square;
     })
    return prev.concat({board:newBoard,isXNext:!last.isXNext});
    
  })
  setCurrentMove(prev=>prev+1)
 };

 const moveTo = (move) => {
       
   setCurrentMove(move);
 }

 const newGame = () => {
     setHistory(NEW_GAME)
     setCurrentMove(0);
 }
 const isDraw =current.board.every((value)=> value !== null)
return (
   <div className="app">
     <h1>TIC  <span className="text-green"> TAC </span> TOE</h1>
    <StatusMessage winner={winner}  current={current} history={history} isDraw={isDraw} />
    <Board  board={current.board} handleOnclick={handleOnclick} winnerSquares={winnerSquares} />
     <button onClick={newGame} 
     className={`btn-reset ${winner ||  isDraw ? 'active' : ''}`} 
     >Start New Game
     </button>

     <h2 style={{fontWeight:'bold'}}>Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />

    <div className="bg-balls" />
  </div>
);
};

export default App;
