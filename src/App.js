import logo from './logo.svg';
import './App.css';
import SquareComponent from './module/SquareComponent';
import { useEffect, useState } from 'react';

const initialState = ["", "", "", "", "", "", "", "", "", "",]
function App() {

  const [gameState, setGameState] = useState(initialState);
  const [isXchange, setIsXchange] = useState(false)
  const onSqureSelected = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXchange ? "X" : "0";
    setGameState(strings);
    setIsXchange(!isXchange)
  }
  useEffect(() => {
    const winner = checkWinner()

    if (winner) {
      alert(`Ta da ! ${winner} has won the Game !`);
      setGameState(initialState)
    }
  }, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
    
  }
  return (
    <div className="app-header">
      <p className="heading-text">React Tic Tac Toe</p>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onSqureSelected(0)} />
        <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onSqureSelected(1)} />
        <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onSqureSelected(2)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSqureSelected(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSqureSelected(4)} />
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSqureSelected(5)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSqureSelected(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSqureSelected(7)} />
        <SquareComponent state={gameState[8]} onClick={() => onSqureSelected(8)} />
      </div>
      <button className="clear-button" onClick={() => setGameState(initialState)}>Clear Game</button>
    </div>
  );
}

export default App;
