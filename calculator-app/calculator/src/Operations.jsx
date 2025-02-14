import { useState } from "react";

export default function Operations({whiteboard, setWhiteboard}) {

    const [operation, setOperation] = useState("=")


    const operations = ["+", "-", "x", "/", "="]

    

    
   

  return (
    <>
    {operations.map((value, index) => (
        <button key= {index} className="grid-item" onClick={() => {handleClick(value,index)}}>
            {value}
        </button>
    ))}
    </>
  );
}
