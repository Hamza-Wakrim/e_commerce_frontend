import React, { useContext } from "react";
import { Footer, Header, Product } from "../../components";
import { BsBagFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { productsContext } from "../../App";
import useCounter from "../../hooks/useCounter";
import "./Cart.css";

const Cart = () => {
    const { products } = useContext(productsContext);
    const [qty, increment, decrement] = useCounter(1);
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
                            <h2 className="cart-items-title">cart (3)</h2>
                            <div className="cart-item">
                                <div className="box">
                                    <div className="product-image">
                                        <img
                                            src="https://via.placeholder.com/80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product-info">
                                        <div className="product-name">
                                            Product Name
                                        </div>
                                        <div className="product-origine">
                                            <span>Origine: </span> Morocco
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        299.00 DH
                                    </div>
                                </div>
                                <div className="box">
                                    <button className="delete">
                                        <AiFillDelete />
                                    </button>
                                    <div className="quantity">
                                        <button
                                            onClick={decrement}
                                            className="decrement"
                                        >
                                            -
                                        </button>
                                        <div className="num">{qty}</div>
                                        <button
                                            onClick={increment}
                                            className="increment"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            <h2 className="cart-total-title">Subtotal</h2>
                            <div className="total">
                                <div className="total-price">
                                    <span>Total Items: </span>1000 DH
                                </div>
                                <div className="tax">
                                    <span>Tax Price: </span>200 DH
                                </div>
                                <div className="shipping">
                                    <p>Shipping: </p>
                                    <div>
                                        <input
                                            type="radio"
                                            name="shipping"
                                            id="regular"
                                            checked={true}
                                        />
                                        <label htmlFor="regular">
                                            Regular 20 DH
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="shipping"
                                            id="fast"
                                        />
                                        <label htmlFor="fast">Fast 50 DH</label>
                                    </div>
                                </div>
                                <div className="discount">
                                    <label htmlFor="discount">
                                        Discount Coupon :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Discount Coupon"
                                        name="discount"
                                    />
                                    <input type="submit" value="Discount" />
                                </div>
                                <div className="total-price">
                                    <span>Total Price: </span>1220 DH
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
