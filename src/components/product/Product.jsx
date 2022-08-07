import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineShoppingCart, AiFillStar} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import axios from "axios";
import {productsContext} from "../../App";
import "./product.css";

const Product = ({product: {id, name, price, media}, rating, button}) => {
    const productURL = `/product/${name}`;
<<<<<<< HEAD
    const { user, getCartProducts } = useContext(productsContext);
=======
    const {user} = useContext(productsContext);
>>>>>>> a72f18d19d9ec9bb4ff4f1b65877e077b51990c6
    const navigate = useNavigate();
    const addToCart = () => {
        if (user) {
            axios.post(
                `https://backend.aromapedia.ma/api/carts?api_token=${
                    user.api_token
                }&food_id=${id}&quantity=${1}`
            );
            getCartProducts();
        } else {
            navigate("/login", {replacea: true});
        }
    };

    return (
        <div className="product">
            <Link to={productURL} className="name">
                <span>{name}</span>
            </Link>
            <Link to={productURL}>
                <img src={media[0].url} alt="" className="image"/>
            </Link>
            <div className="rating">
                <div className="stars">
                    <AiFillStar className="icon-star"/>
                    <AiFillStar className="icon-star"/>
                    <AiFillStar className="icon-star"/>
                    <AiFillStar className="icon-star"/>
                    <AiFillStar className="icon-star"/>
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
<<<<<<< HEAD
                <button onClick={() => addToCart()} className="add-to-cart">
                    <AiOutlineShoppingCart className="icon" />
=======
                <button onClick={addToCart} className="add-to-cart">
                    <FaShoppingCart/>
>>>>>>> a72f18d19d9ec9bb4ff4f1b65877e077b51990c6
                    <span>ADD TO CART</span>
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Product;
