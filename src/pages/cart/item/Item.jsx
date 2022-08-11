import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useCounter from "../../../hooks/useCounter";

const Item = ({ item, setTotal, deleteItem }) => {
    const [qty] = useCounter(item.quantity);
    const card = item.food;
    useEffect(() => {
        setTotal((prevTotale) => (prevTotale+(card.price * item.quantity)));
    }, []);

    return (
        <div>
            <div className="cart-item">
                <div className="box">
                    <div className="product-image">
                        <img src={card.media[0].url} alt="item" />
                    </div>
                    <div className="product-info">
                        <div className="product-name">{card.name}</div>
                        <div className="product-origine">
                            <span>Origine: </span> {card.origine_country}
                        </div>
                    </div>
                    <div className="product-price">{card.price} DH</div>
                </div>
                <div className="box">
                    <button
                        onClick={() => deleteItem(item.id)}
                        className="delete"
                    >
                        <AiOutlineDelete size={25} fontWeight={50}/>
                    </button>
                    <div className="quantity">
                        <span>Quantity :</span>
                        {qty}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
