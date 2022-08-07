import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Import Hooks
import useCounter from "../../../hooks/useCounter";
// Ipmort Icons
import { FaFacebookF, FaTwitter, FaPinterestP, FaTimes } from "react-icons/fa";
// Import Link
import { Link } from "react-router-dom";
// Imort CSS
import axios from "axios";
import "./QuickView.css";
import { productsContext } from "../../../App";

const QuickView = ({ product, setActive }) => {
    const [qty, increment, decrement] = useCounter(1);
    const productURL = `/product/${product.name}`;
    const { getCartProducts, user } = useContext(productsContext);
    const navigate = useNavigate();
    const addToCart = () => {
        if (user) {
            axios.post(
                `https://backend.aromapedia.ma/api/carts?api_token=${
                    user.api_token
                }&food_id=${product.id}&quantity=${1}`
            );
            getCartProducts();
        } else {
            navigate("/login", { replacea: true });
        }
    };

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
                            <img src={product.media[0].url} alt="" />
                        </Link>
                    </div>
                    <div className="product-info">
                        <div className="product-name">
                            <Link to={productURL}>{product.name}</Link>
                        </div>
                        <div className="product-botanical">
                            <span>Botanical Name:</span>
                            {product.botanical_name}
                        </div>
                        <div className="product-origin">
                            <span>Origin: </span>
                            {product.origine_country}
                        </div>
                        <div className="product-price">
                            ${product.price - product.discount_price}
                        </div>
                        <div className="product-cart">
                            <div className="product-counter">
                                <button onClick={decrement}>-</button>
                                <p>{qty}</p>
                                <button onClick={increment}>+</button>
                            </div>
                            <div className="btns">
                                <button
                                    onClick={() => addToCart(product.id)}
                                    className="btn cart"
                                >
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
