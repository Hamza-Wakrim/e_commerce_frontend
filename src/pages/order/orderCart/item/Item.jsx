import React, { useEffect } from "react";

const Item = ({ cartItem, setTotal }) => {
    useEffect(() => {
        setTotal(
            (prevTotale) =>
                (prevTotale += cartItem.food.price * cartItem.quantity)
        );
    }, []);
    return (
        <div className="cart-item">
            <div className="image">
                <img src={cartItem.food.media[0].url} alt="product" />
            </div>
            <div className="info">
                <p>{cartItem.food.name}</p>
                <p>{cartItem.food.price} DH</p>
                <p>
                    <span>QTY:</span>
                    {cartItem.quantity}
                </p>
            </div>
        </div>
    );
};

export default Item;
