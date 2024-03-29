import axios from "axios";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../App";
import { AiOutlineDelete } from "react-icons/ai";
import useCounter from "../../../hooks/useCounter";

const Item = ({ item, setTotal, deleteItem }) => {
    const [qty, increment, decrement] = useCounter(item.quantity);
    const { user } = useContext(productsContext);
    const card = item.food;
    useEffect(() => {
        setTotal((prevTotale) => prevTotale + card.price * item.quantity);
    }, []);

    const update = (qty) => {
        axios.post(
            `https://backend.aromapedia.ma/api/carts/increment/${item.id}?api_token=${user.api_token}&quantity=${qty}`
        );
    };

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
                        <AiOutlineDelete size={25} fontWeight={50} />
                    </button>
                    <div className="quantity">
                        <div
                            onClick={() => {
                                decrement();
                                update(qty - 1);
                            }}
                            className="decrement"
                        >
                            -
                        </div>
                        <div className="num">{qty}</div>

                        <div
                            onClick={() => {
                                increment();
                                update(qty + 1);
                            }}
                            className="increment"
                        >
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
