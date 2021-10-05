import React from 'react'

const StatusMessage = ({winner,current,isDraw}) => {

  
    return (
       <div className="status-message">
          {winner && 
           <>
            Winner is {' '}
            <span className={winner==='x'? 'text-green' : 'text-orange' }>
               {winner}
               </span>
           </>
          }
          {!winner && !isDraw && 
            <>
           Next player is {' '} 
           <span className={current.isXNext ? 'text-green' : 'text-orange'}> 
              {current.isXNext? 'X' : 'O'}
              </span> 
           </> 
           }
          {!winner && isDraw && 
          <>
          The game between <span className="text-green">X</span> and <span className="text-orange">O</span> finished by draw
          </>
}
       </div>
    )
}

export default StatusMessage
