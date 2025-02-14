import { useState } from "react"

export default function CalculatorScreen ( {whiteboard}){
    const [calculatorScreen, setCalculatorScreen] = useState("")

    return (
        <h2>{whiteboard}</h2>
    )
}