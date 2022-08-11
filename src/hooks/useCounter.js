import { useState } from "react";

const useCounter = (initialCount) => {
    const [qty, setQty] = useState(initialCount);

    const increment = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decrement = () => {
        if (qty === 1) {
            setQty(qty);
        } else {
            setQty((prevQty) => prevQty - 1);
        }
    };

    return [qty, increment, decrement];
};

export default useCounter;
