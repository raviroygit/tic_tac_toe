/* eslint-disable react-hooks/exhaustive-deps */

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(new Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState("");
  const [playerName, setPlayerName] = useState({ p1: "", p2: "" });
  const [startGame, setStartGame] = useState(false);

  const checkWinner = () => {
    const winnerIndex = [
      [0, 1, 2],
      [0, 3, 6],
      [2, 5, 8],
      [6, 7, 8],
      [3, 4, 5],
      [6, 4, 2],
      [2, 4, 6],
      [0, 4, 8],
      [8, 4, 0],
      [1, 4, 7],

    ];
    for (let i = 0; i < winnerIndex.length; i++) {
      const [a, b, c] = winnerIndex[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        setIsWinner("Winner is " + (state[a] ==="X"? playerName.p1:playerName.p2));
      }
    }
    if (
      !isWinner &&
      state[0] !== null &&
      state[1] !== null &&
      state[2] !== null &&
      state[3] !== null &&
      state[4] !== null &&
      state[5] !== null &&
      state[6] !== null &&
      state[7] !== null &&
      state[8] !== null
    ) {
      setIsWinner("Game Draw!");
    }
  };

  useEffect(() => {
    checkWinner();
  }, [state, checkWinner]);

  const handleClick = (index) => {
    let newArray = [...state];
    if (newArray[index]) {
      return;
    }
    newArray[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setState(newArray);
  };

  return (
    <>
    <h1 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: "20px",
      }}>Tic Tac Toe</h1>
      {startGame && !isWinner && playerName.p1 && playerName.p2 &&
      <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: "20px",
      }}>
      <h4>{isXTurn ? playerName.p1 : playerName.p2} turn</h4>
    </div>
      }
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "250px",
          paddingTop:"unset"
        }}
      >
        {isWinner ? (
          <div>
            <h1>{isWinner}</h1>
            <button
              onClick={() => {
                setIsWinner("");
                setState(new Array(9).fill(null));
                setIsXTurn(true);
                setStartGame(false);
                setPlayerName({p1:"",p2:""})
              }}
            >
              Play again
            </button>
          </div>
        ) : (
          <>
            {!startGame ? (
              <div>
                <input
                  placeholder="First player name"
                  value={playerName.p1}
                  name="p1"
                  onChange={(e) => {
                    setPlayerName({
                      ...playerName,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <input
                  placeholder="Second player name"
                  value={playerName.p2}
                  name="p2"
                  onChange={(e) => {
                    setPlayerName({
                      ...playerName,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <button
                  onClick={() => {
                    if (playerName.p1 && playerName.p2) {
                      setStartGame(true);
                    }
                  }}
                >
                  Start Game
                </button>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <div style={{ gap: "5px", border: "1px solid black" }}>
                  <div
                    onClick={(e) => handleClick(0)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[0]}
                  </div>
                  <div
                    onClick={(e) => handleClick(1)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[1]}
                  </div>
                  <div
                    onClick={(e) => handleClick(2)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[2]}
                  </div>
                </div>
                <div style={{ gap: "5px", border: "1px solid black" }}>
                  <div
                    onClick={(e) => handleClick(3)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[3]}
                  </div>
                  <div
                    onClick={(e) => handleClick(4)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[4]}
                  </div>
                  <div
                    onClick={(e) => handleClick(5)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[5]}
                  </div>
                </div>
                <div style={{ gap: "5px", border: "1px solid black" }}>
                  <div
                    onClick={(e) => handleClick(6)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[6]}
                  </div>
                  <div
                    onClick={(e) => handleClick(7)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[7]}
                  </div>
                  <div
                    onClick={(e) => handleClick(8)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                    }}
                  >
                    {state[8]}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
