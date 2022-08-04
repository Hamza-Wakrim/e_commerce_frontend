import React, { useEffect } from "react";
// Import Pages
import {
    Home,
    Shop,
    Product,
    Blog,
    Article,
    Cart,
    Login,
    Profile,
} from "./pages";
// Import API
import Api from "./API/Api";
// Import React Router
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Import Css
import "./App.css";

export const productsContext = React.createContext();

function App() {
    const [categories, products] = Api();
    console.log(products);
    return (
        <productsContext.Provider value={{ products, categories }}>
            <div className="App">
                <BrowserRouter>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/:productCategoy" element={<Shop />} />
                            <Route path="/product/:id" element={<Product />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route
                                path="/blog/:article"
                                element={<Article />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        </productsContext.Provider>
    );
}

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default App;
