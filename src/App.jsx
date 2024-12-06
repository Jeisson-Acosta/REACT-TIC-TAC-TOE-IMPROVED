import { useState } from 'react'
import './App.css'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'

import { useBoard } from './hooks/useBoard'
import { GameBoard } from './components/GameBoard'

function App() {

  const {board, turn, winner, updateBoard, resetGame} = useBoard()

  return (

    <section className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <div className="game">
        <GameBoard board={board} updateBoard={updateBoard}/>
      </div>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
      
    </section>
  )
}

export default App