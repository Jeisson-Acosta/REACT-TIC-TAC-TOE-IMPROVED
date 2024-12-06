import { Square } from "./Square"
export function WinnerModal ({winner, resetGame}){

    if (winner === null) return
    
    return (

        <div className="winner">
            <div className="win">
                <h2>
                    {winner ? 'Gano' : 'Empate'}
                </h2>
                {winner && <Square>{winner}</Square>}
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    )
}