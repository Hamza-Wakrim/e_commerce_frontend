import React, { useContext, useEffect, useState } from "react";
import { Footer, Header, Product } from "../../components";
import { BsBagFill } from "react-icons/bs";
import { productsContext } from "../../App";
import axios from "axios";
import Item from "./item/Item";
import "./Cart.css";

const Cart = () => {
    const { products } = useContext(productsContext);
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    let user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        getCartProducts();
    }, []);

    async function deleteItem(id) {
        await fetch(
            `https://backend.aromapedia.ma/api/carts/${id}?api_token=${user.api_token}`,
            { method: "DELETE" }
        );
        getCartProducts();
    }

    function getCartProducts() {
        axios
            .get(
                `https://backend.aromapedia.ma/api/carts?api_token=${user.api_token}&with=food`
            )
            .then((res) => setCartProducts(res.data.data))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Header />
            <main className="cart">
                <div className="container">
                    <div className="cart-header">
                        <h1 className="cart-title">
                            <BsBagFill />
                            My Cart
                        </h1>
                    </div>
                    <div className="cart-body">
                        <div className="cart-items">
                            <h2 className="cart-items-title">
                                cart ({cartProducts.length})
                            </h2>
                            {cartProducts.length > 0 ? (
                                cartProducts.map((cartProduct) => (
                                    <Item
                                        key={cartProduct.id}
                                        item={cartProduct}
                                        setTotal={setTotal}
                                        token={user.api_token}
                                        deleteItem={deleteItem}
                                    />
                                ))
                            ) : (
                                <p
                                    style={{
                                        padding: "10px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No Items To Show
                                </p>
                            )}
                        </div>
                        <div className="cart-total">
                            <h2 className="cart-total-title">Subtotal</h2>
                            <div className="total">
                                <div className="total-price">
                                    <span>Total Items: </span>
                                    {total} DH
                                </div>
                                <button className="checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="recommended">
                        <h2 className="title">Recommended Products</h2>
                        <div className="products-container">
                            {products.map((product) =>
                                product.featured ? (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        rating={5}
                                    />
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
