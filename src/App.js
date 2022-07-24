import React, { useEffect, useState } from "react";
// Import Pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Blog from "./pages/blog/Blog";
// Import React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Data
import { products } from "./data/Data";
// Import Css
import "./App.css";
import Article from "./pages/article/Article";
import axios from "axios";

export const productsContext = React.createContext();

function App() {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios
            .get("https://backend.aromapedia.ma/api/categories")
            .then((res) => setCategories(res.data.data));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <productsContext.Provider value={{ products, categories }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path=":productCategoy" element={<Shop />} />
                        <Route path="product/:id" element={<Product />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="blog/:article" element={<Article />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </productsContext.Provider>
    );
}

export default App;
