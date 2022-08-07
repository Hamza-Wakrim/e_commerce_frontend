import React, { useState } from "react";
import "./OrderCart.css";
import Item from "./item/Item";

const OrderCart = ({ cartProducts }) => {
    const [total, setTotal] = useState(0);
    return (
        <div className="box">
            <div className="box-title">
                VOTRE COMMANDE ({cartProducts.length})
            </div>
            <div className="cart-items">
                {cartProducts &&
                    cartProducts.map((cartItem) => (
                        <Item
                            key={cartItem.id}
                            cartItem={cartItem}
                            setTotal={setTotal}
                        />
                    ))}
            </div>
            <div className="total">Total :{total} DH</div>
            <button type="button" className="btn">
                Confirmer la commande
            </button>
        </div>
    );
};

export default OrderCart;
