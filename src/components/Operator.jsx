function Operator({ updateCals, operator }) {
    return <button onClick={() => updateCals(operator)}>{operator}</button>;
}

export default Operator;
