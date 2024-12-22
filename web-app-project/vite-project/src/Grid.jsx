import { useState } from "react";
import WinnerMessage from "./WinnerMessage";

export default function Grid() {
  const newArray = new Array(9).fill("");
  const [content, setContent] = useState(newArray);
  const [move, setMove] = useState("O");
 
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);

  const handleClick = (event, index) => {
    let updatedContent = [...content];
    updatedContent[index] = move;
    event.target.disabled = true

    setContent(updatedContent);
    if (move === "O") {
      setOMoves([...oMoves, index].sort());
      setMove("X");
    } else if (move === "X") {
        setXMoves([...xMoves, index].sort());
      setMove("O");
    }
  };




  return (
    <>
      <>
        <div className="grid-container">
          {content.map((value, index) => (
            <button
              key={index}
              className="grid-item"
              onClick={() => handleClick(event, index)} 
            >
              {value}
            </button>
          ))}
        </div>
        <WinnerMessage oMoves= {oMoves} xMoves= {xMoves}/>
      </>
    </>
  );
}

