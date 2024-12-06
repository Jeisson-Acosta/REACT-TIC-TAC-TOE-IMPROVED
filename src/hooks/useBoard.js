import { useState } from "react"
import { TURNS } from "../constants"
import { checkWinner, checkEndGame } from "../logicBoard/checkBoard"
import confetti from 'canvas-confetti'

export function useBoard () {

    const [board, setBoard] = useState(() => {

        const boardFromStorage = window.localStorage.getItem('board')

        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })
    const [turn, setTurn] = useState(() => {

        const turnFromStorage = window.localStorage.getItem('turn')

        return turnFromStorage ?? TURNS.X
    })
    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => {
  
      if(board[index] || winner) return
  
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
  
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', newTurn)
  
      const newWinner = checkWinner(newBoard)
  
      if (newWinner) {
  
        confetti()
        setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
  
        setWinner(false)
      }
    }
  
    const resetGame = () => {
  
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('turn')
    }
  
    return {board, turn, winner, updateBoard, resetGame}
}