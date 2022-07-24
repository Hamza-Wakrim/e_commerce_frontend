import { useState } from "react";

const useCounter = (initialCount) => {
    const [counter, setCounter] = useState(initialCount);

    const increment = () => {
        if (counter >= 10) {
            setCounter(counter);
        } else {
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if (counter === 1) {
            setCounter(counter);
        } else {
            setCounter(counter - 1);
        }
    };

    return [counter, increment, decrement];
};

export default useCounter;
