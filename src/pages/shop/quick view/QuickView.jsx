import React from "react";
// Import Hooks
import useCounter from "../../../hooks/useCounter";
// Ipmort Icons
import { FaFacebookF, FaTwitter, FaPinterestP, FaTimes } from "react-icons/fa";
// Import Link
import { Link } from "react-router-dom";
// Imort CSS
import "./QuickView.css";

const QuickView = ({ product, setActive }) => {
    const [counter, increment, decrement] = useCounter(1);
    const productURL = `/product/${product.name}`;

    return (
        <div className="quick-view">
            {product ? (
                <div className="product">
                    <FaTimes
                        onClick={() => setActive(false)}
                        className="close-icon"
                    />
                    <div className="product-image">
                        <Link to={productURL}>
                            <img src={product.image} alt="" />
                        </Link>
                    </div>
                    <div className="product-info">
                        <div className="product-name">
                            <Link to={productURL}>{product.name}</Link>
                        </div>
                        <div className="product-botanical">
                            <span>Botanical Name:</span>
                            {product.botanical}
                        </div>
                        <div className="product-origin">
                            <span>Origin: </span>
                            {product.origin}
                        </div>
                        <div className="product-size">
                            <span>Choose Size*</span>
                            <div className="btns">
                                {product.size.map((s) => (
                                    <button key={s} className="size">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-cart">
                            <div className="product-counter">
                                <button onClick={decrement}>-</button>
                                <p>{counter}</p>
                                <button onClick={increment}>+</button>
                            </div>
                            <div className="btns">
                                <button className="btn cart">
                                    ADD TO CART
                                </button>
                                <button className="btn list">WISH LIST</button>
                            </div>
                        </div>
                        <div className="product-share">
                            <span>SHARE:</span>
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaPinterestP className="icon" />
                            <Link to={productURL}>More Info</Link>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default QuickView;
