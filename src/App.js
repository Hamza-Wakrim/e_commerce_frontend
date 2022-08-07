import React, { useEffect, useState } from "react";
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
    Register,
    Order,
} from "./pages";
// Import API
import Api from "./API/Api";
// Import React Router
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Import Css
import "./App.css";
import axios from "axios";

export const productsContext = React.createContext();

function App() {
    const [categories, products] = Api();
    const user = JSON.parse(localStorage.getItem("user"));
    const [total, setTotal] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        getCartProducts();
    }, []);

    async function deleteItem(id) {
        if (!user) return;
        await fetch(
            `https://backend.aromapedia.ma/api/carts/${id}?api_token=${user.api_token}`,
            { method: "DELETE" }
        );
        getCartProducts();
    }

    function getCartProducts() {
        if (!user) return;
        axios
            .get(
                `https://backend.aromapedia.ma/api/carts?api_token=${user.api_token}&with=food`
            )
            .then((res) => setCartProducts(res.data.data))
            .catch((err) => console.log(err));
    }

    return (
        <productsContext.Provider
            value={{
                products,
                categories,
                total,
                setTotal,
                user,
                cartProducts,
                deleteItem,
                getCartProducts,
            }}
        >
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
                            <Route path="/register" element={<Register />} />
                            <Route path="/user/:id" element={<Profile />} />
                            <Route path="/order" element={<Order />} />
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
