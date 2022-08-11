import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Product = ({ product, setName, setActive }) => {
    const { name, price, media } = product;
    const productURL = `/product/${name}`;

    const view = () => {
        setActive(true);
        setName(name);
    };

    return (
        <div className="product">
            <div className="image">
                <Link to={productURL}>
                    <img src={media[0].url} alt="" className="image" />
                </Link>
            </div>
            <div className="info">
                <Link to={productURL} className="name">
                    {name}
                </Link>

                {price ? (
                    <div className="price">
                        Price: <span>${price}</span>
                    </div>
                ) : (
                    ""
                )}
                <button onClick={view} className="btn view">
                    <span>QUICK VIEW</span>
                </button>
                <button onClick={() => {}} className="btn list">
                    <span>WISH LIST</span>
                </button>
                <div className="share">
                    <span>SHARE:</span>
                    <FaFacebookF className="icon" />
                    <FaTwitter className="icon" />
                    <FaPinterestP className="icon" />
                    <Link to={productURL}>More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
