import { useState } from "react";

export default function WinnerMessage({ oMoves, xMoves }) {
  console.log(oMoves, xMoves);
  const [winner, setWinner] = useState(false);

  const winningCombos = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (xMoves.length >=3 || oMoves.length >=3){
    for (let i=0; i< winningCombos.length; i++){
        const filteredX = xMoves.filter((element) => winningCombos[i].includes(element))
        console.log(filteredX)
        const filteredO = oMoves.filter((element) => winningCombos[i].includes(element))
        if (filteredX.length === 3){
            setWinner("X")
            break;
        }
        else if (filteredO.length === 3){
            setWinner("O")
            break
        }

        

        if (winner) return <h2>Congrats! Player {winner} has won! </h2>;
    }
  }
}
