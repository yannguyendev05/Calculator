import Operator from "./Operator";

import "../../styles/Operators.css";

function Operators({ updateCals, deleteLast }) {
    const operators = ["+", "-", "*", "/"];

    return (
        <div className="operators">
            {operators.map((operator, i) => (
                <Operator key={i} updateCals={updateCals} operator={operator} />
            ))}
            <button onClick={deleteLast}>Delete</button>
        </div>
    );
}

export default Operators;
