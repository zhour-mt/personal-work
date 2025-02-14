import { useState } from "react";
import Operations from "./Operations";
import CalculatorScreen from "./CalculatorScreen";

export default function CalculatorButtons() {
  const buttons = new Array(9).fill("");

  const [whiteboard, setWhiteboard] = useState("");

  const handleClick = (index) => {
    let number = whiteboard;

    setWhiteboard((number += index));
  };

  console.log(whiteboard);
  return (
    <>
      <CalculatorScreen whiteboard={whiteboard} />
      <div className="grid-container">
        {buttons.map((value, index) => (
          <button
            key={index}
            className="grid-item"
            onClick={() => handleClick(index)}
          >
            {(index += 1)}
          </button>
        ))}
        <button className="grid-item" onClick={() => handleClick(0)}>
          0
        </button>
      </div>
      <div>
        <Operations whiteboard={whiteboard} setWhiteboard={setWhiteboard} />
      </div>
    </>
  );
}

//
