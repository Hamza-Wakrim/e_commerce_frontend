import React from "react";
// import Hook
import useCounter from "../../../hooks/useCounter";
// Import Icons
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

const ProductInfo = ({ product }) => {
    const [counter, increment, decrement] = useCounter(1);
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
                    {/* <div className="size">
                                        <span>Choose Size *</span>
                                        <br />
                                        {product.size.map((e) => (
                                            <button onClick={() => {}} key={e}>
                                                {e}
                                            </button>
                                        ))}
                                    </div> */}
                    <p className="price">
                        ${product.price - product.discount_price}
                    </p>
                    <div className="counter-container">
                        <button onClick={decrement} className="btn">
                            -
                        </button>
                        <p className="counter">{counter}</p>
                        <button onClick={increment} className="btn">
                            +
                        </button>
                    </div>
                    <button onClick={() => {}} className="add-to-cart">
                        <AiOutlineShoppingCart className="icon" />
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
