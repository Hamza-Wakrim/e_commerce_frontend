import React from "react";
// import Hook
import useCounter from "../../../hooks/useCounter";
// Import Icons
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import axios from "axios";

const ProductInfo = ({ product }) => {
    const [qty, increment, decrement] = useCounter(1);
    const addToCart = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        axios.post(
            `https://backend.aromapedia.ma/api/carts?api_token=${user.api_token}&food_id=${product.id}&quantity=${qty}`
        );
    };
    return (
        <div>
            <div className="box">
                <div className="image">
                    <img src={product.media[0].url} alt="product" />
                </div>
                <div className="info">
                    <div className="name">{product.name}</div>
                    <div className="rating">
                        <div className="stars">
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                            <AiFillStar className="star-icon" />
                        </div>
                        <a href="https://google.com">300 Reviews</a>
                    </div>
                    <p>
                        <span>Botanical Name:</span>
                        {product.botanical_name}
                    </p>
                    <p>
                        <span>Origin:</span>
                        {product.origine_country}
                    </p>
                    <p className="price">
                        ${product.price - product.discount_price}
                    </p>
                    <div className="counter-container">
                        <button onClick={decrement} className="btn">
                            -
                        </button>
                        <p className="counter">{qty}</p>
                        <button onClick={increment} className="btn">
                            +
                        </button>
                    </div>
                    <button onClick={addToCart} className="add-to-cart">
                        <AiOutlineShoppingCart className="icon" />
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
