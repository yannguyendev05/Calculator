function Digit({ updateCals, digit }) {
    return (
        <button onClick={() => updateCals(digit.toString())}>{digit}</button>
    );
}

export default Digit;
