import React, { useContext, useEffect, useReducer, useState } from "react";
import { Footer, Header } from "../../components";
import axios from "axios";
import OrderCart from "./orderCart/OrderCart";
import UserInfo from "./userInfo/UserInfo";
import { productsContext } from "../../App";
import "./Order.css";

const initialInfo = {
    receiver_name: "",
    receiver_phone: "",
    receiver_address: "",
    receiver_city: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                receiver_name: action.name,
            };
        case "SET_PHONE":
            return {
                ...state,
                receiver_phone: action.phone,
            };
        case "SET_ADDRESS":
            return {
                ...state,
                receiver_address: action.address,
            };
        case "SET_CITY":
            return {
                ...state,
                receiver_city: action.city,
            };
        default:
            return state;
    }
};

const Order = () => {
    const [info, dispach] = useReducer(reducer, initialInfo);
    const [cartProducts, setCartProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [empty, setEmpty] = useState({ n: null, p: null, a: null, c: null });
    const { user } = useContext(productsContext);

    const getCartWithProducts = () => {
        axios
            .get(
                `https://backend.aromapedia.ma/api/carts?api_token=${user.api_token}&with=food`
            )
            .then((res) => setCartProducts(res.data.data))
            .catch((err) => console.log(err));
    };

    const getCart = () => {
        axios
            .get(
                `https://backend.aromapedia.ma/api/carts?api_token=${user.api_token}`
            )
            .then((res) => setCarts(res.data.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getCartWithProducts();
        getCart();
    }, []);

    const sendData = () => {
        if (info.receiver_name === "") return setEmpty({ n: "Name" });
        if (info.receiver_phone === "") return setEmpty({ n: "Phone" });
        if (info.receiver_address === "") return setEmpty({ n: "Address" });
        if (info.receiver_city === "") return setEmpty({ n: "City" });

        const options = {
            method: "POST",
            url: "https://backend.aromapedia.ma/api/orders",
            params: {
                api_token: user.api_token,
                receiver_name: info.receiver_name,
                receiver_phone: info.receiver_phone,
                receiver_address: info.receiver_address,
                receiver_city: info.receiver_city,
                carts: carts,
            },
        };

        axios
            .request(options)
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    return (
        <div>
            <Header />
            <main className="order">
                <div className="container">
                    <div className="user">
                        <UserInfo
                            info={info}
                            dispach={dispach}
                            sendData={sendData}
                            empty={empty}
                        />
                    </div>
                    <OrderCart cartProducts={cartProducts} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Order;
