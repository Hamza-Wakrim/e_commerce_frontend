import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import "./product.css";

const Product = ({ product: { name, price, media }, rating, button }) => {
    const productURL = `/product/${name}`;
    return (
        <div className="product">
            <Link to={productURL} className="name">
                {name}
            </Link>
            <Link to={productURL}>
                <img src={media[0].url} alt="" className="image" />
            </Link>
            <div className="rating">
                <div className="stars">
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                    <AiFillStar className="icon-star" />
                </div>
                <div className="rate">{rating}</div>
            </div>
            {price ? (
                <div className="price">
                    Price: <span>{price}</span>
                </div>
            ) : (
                ""
            )}
            {button ? (
                <button className="add-to-cart">
                    <AiOutlineShoppingCart />
                    <span>ADD TO CART</span>
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Product;
