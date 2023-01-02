import { useState, useEffect } from 'react';
import './App.css';
import SquareComponent from './Components/SquareComponent';

function App() {

  const clearState = ["", "", "", "", "", "", "", "", ""];
  const [gameState, updateGameState] = useState(clearState);
  const [isChanceX, updateChanceX] = useState(false);

  const onClickUser = (index) => {

    let string = Array.from(gameState);
    if (string[index]) {
      return;
    }
    string[index] = isChanceX ? 'O' : "X";
    updateChanceX(!isChanceX);
    updateGameState(string);
  }

  const clearGame = () => {
    updateGameState(clearState);
  }
  useEffect(() => {
    let winner = checkWinner();
    if(winner){
      clearGame();
      alert(`Player ${winner} won the game`)
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
    <div className="main-container">
      <h2 className="main-head">Tic tac toe</h2>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" onclick={() => onClickUser(0)} state={gameState[0]} />
        <SquareComponent className="b-bottom-right" onclick={() => onClickUser(1)} state={gameState[1]} />
        <SquareComponent className="b-bottom" onclick={() => onClickUser(2)} state={gameState[2]} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" onclick={() => onClickUser(3)} state={gameState[3]} />
        <SquareComponent className="b-bottom-right" onclick={() => onClickUser(4)} state={gameState[4]} />
        <SquareComponent className="b-bottom" onclick={() => onClickUser(5)} state={gameState[5]} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" onclick={() => onClickUser(6)} state={gameState[6]} />
        <SquareComponent className="b-right" onclick={() => onClickUser(7)} state={gameState[7]} />
        <SquareComponent onclick={() => onClickUser(8)} state={gameState[8]} />
      </div>
      <button className="clear-button" onClick={clearGame} >Clear Game</button>
    </div>
  );
}

export default App;