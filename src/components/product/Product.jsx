import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import img from "../../images/products/PlantTherapy-PupPony-ConfidentK9Bottle.jpg";
import "./product.css";

const Product = ({ name, image, price, button, rating }) => {
    const productURL = `/product/${name}`;
    return (
        <div className="product">
            <Link
                onClick={window.scrollTo(0, 0)}
                to={productURL}
                className="name"
            >
                {name}
            </Link>
            <Link onClick={window.scrollTo(0, 0)} to={productURL}>
                <img src={img} alt="" className="image" />
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
