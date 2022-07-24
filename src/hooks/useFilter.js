import { useState, useEffect } from "react";

const useFilter = (array, objectProp, filterCondition = true) => {
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        setFiltered(array.filter((e) => e[objectProp] === filterCondition));
    }, []);
    return filtered;
};

export default useFilter;
