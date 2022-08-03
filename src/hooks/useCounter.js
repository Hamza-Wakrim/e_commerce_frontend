import { useState } from "react";

const useCounter = (initialCount) => {
    const [qty, setQty] = useState(initialCount);

    const increment = () => {
        setQty(qty + 1);
    };

    const decrement = () => {
        if (qty === 1) {
            setQty(qty);
        } else {
            setQty(qty - 1);
        }
    };

    return [qty, increment, decrement];
};

export default useCounter;
