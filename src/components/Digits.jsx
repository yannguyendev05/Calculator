import Equal from "./Equal";
import Digit from "./Digit";

import "../../styles/Digits.css";

function Digits({ updateCals, calculate }) {
    const digits = [];

    for (let i = 1; i < 10; i++) {
        digits.push(i);
    }

    digits.push(0);
    digits.push(".");

    return (
        <div className="digits">
            {digits.map((digit, i) => (
                <Digit key={i} updateCals={updateCals} digit={digit} />
            ))}

            <Equal calculate={calculate} />
        </div>
    );
}

export default Digits;
