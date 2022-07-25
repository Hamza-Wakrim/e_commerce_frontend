import React from "react";
// Import Pages
import { Home, Shop, Product, Blog, Article } from "./pages";
// Import API
import Api from "./API/Api";
// Import React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Css
import "./App.css";

export const productsContext = React.createContext();

function App() {
    const [categories, products] = Api();

    console.log(categories, products);

    return (
        <productsContext.Provider value={{ products, categories }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:productCategoy" element={<Shop />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:article" element={<Article />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </productsContext.Provider>
    );
}

export default App;
