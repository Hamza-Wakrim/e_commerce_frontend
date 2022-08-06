import { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const getCategories = () => {
        axios
            .get("https://backend.aromapedia.ma/api/categories")
            .then((res) => setCategories(res.data.data))
            .catch((err) => console.log(err));
    };

    const getProducts = () => {
        axios
            .get("https://backend.aromapedia.ma/api/foods?with=category")
            .then((res) => setProducts(res.data.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    return [categories, products];
};

export default Api;
