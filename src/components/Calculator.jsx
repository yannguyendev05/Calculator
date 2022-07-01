import { useState } from "react";

import Operators from "./Operators";
import Digits from "./Digits";
import Screen from "./Screen";

import "../../styles/Calculator.css";

function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["+", "-", "*", "/", "."];

    const updateCals = (value) => {
        if (
            (ops.includes(value) && calc === "") ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const deleteLast = () => {
        if (calc == "") {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    };

    return (
        <div className="calculator">
            <Screen calc={calc} result={result} />
            <Operators updateCals={updateCals} deleteLast={deleteLast} />
            <Digits updateCals={updateCals} calculate={calculate} />
        </div>
    );
}

export default Calculator;
