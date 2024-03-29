import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { productsContext } from "../../App";
import "./product.css";

const Product = ({ product: { id, name, price, media }, rating, button }) => {
    const productURL = `/product/${name}`;
    const { user, getCartProducts, cartProducts } = useContext(productsContext);

    const navigate = useNavigate();
    const addToCart = () => {
        if (user) {
            let productsId = {};
            for (let cartProduct of cartProducts) {
                productsId[cartProduct.food_id] = cartProduct.id;
            }

            if (Object.keys(productsId).includes(id.toString())) {
                axios.post(
                    `https://backend.aromapedia.ma/api/carts/increment/${
                        productsId[id]
                    }?api_token=${user.api_token}&quantity=${1}`
                );
            } else {
                axios.post(
                    `https://backend.aromapedia.ma/api/carts?api_token=${
                        user.api_token
                    }&food_id=${id}&quantity=${1}`
                );
            }
            getCartProducts();
        } else {
            navigate("/login", { replacea: true });
        }
    };

    return (
        <div className="product">
            <Link to={productURL} className="name">
                <span>{name}</span>
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
                <div className="rate">{rating} Reviews</div>
            </div>
            {price ? (
                <div className="price">
                    Price: <span>{price}</span>
                </div>
            ) : (
                ""
            )}
            {button ? (
                <div>
                    <button onClick={addToCart} className="add-to-cart">
                        <AiOutlineShoppingCart className="icon" />
                        <span>ADD TO CART</span>
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Product;
