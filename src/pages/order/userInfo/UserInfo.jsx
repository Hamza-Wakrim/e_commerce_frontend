import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productsContext } from "../../../App";
import "./UserInfo.css";

const UserInfo = ({ info, dispach, sendData, empty }) => {
    const [data, setData] = useState([]);
    const { user } = useContext(productsContext);
    useEffect(() => {
        axios
            .get(
                `https://backend.aromapedia.ma/api/orders?api_token=${user.api_token}`
            )
            .then((res) => setData(res.data.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="box">
            <div className="box-title">Address</div>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="user-info">
                        <div className="name">{item.receiver_name}</div>
                        <div className="city">{item.receiver_city}</div>
                        <div className="adresse">{item.receiver_adresse}</div>
                        <div className="phone">{item.receiver_phone}</div>
                    </div>
                ))
            ) : (
                <div className="user-info">
                    <div className="name-input">
                        <input
                            type="text"
                            id="receiver_name"
                            placeholder="Full Name"
                            value={info.receiver_name}
                            onChange={(e) =>
                                dispach({
                                    type: "SET_NAME",
                                    name: e.target.value,
                                })
                            }
                        />
                        {empty.n && (
                            <div className="empty">
                                {empty.n} Can't Be Empty
                            </div>
                        )}
                    </div>
                    <div className="phone-input">
                        <input
                            type="tel"
                            id="receiver_phone"
                            placeholder="Phone Number"
                            value={info.receiver_phone}
                            onChange={(e) =>
                                dispach({
                                    type: "SET_PHONE",
                                    phone: e.target.value,
                                })
                            }
                        />
                        {empty.p && (
                            <div className="empty">
                                {empty.p} Can't Be Empty
                            </div>
                        )}
                    </div>
                    <div className="address-input">
                        <input
                            type="text"
                            id="receiver_address"
                            placeholder="Address"
                            value={info.receiver_address}
                            onChange={(e) =>
                                dispach({
                                    type: "SET_ADDRESS",
                                    address: e.target.value,
                                })
                            }
                        />
                        {empty.a && (
                            <div className="empty">
                                {empty.a} Can't Be Empty
                            </div>
                        )}
                    </div>
                    <div className="city-input">
                        <input
                            type="text"
                            id="receiver_city"
                            placeholder="City"
                            value={info.receiver_city}
                            onChange={(e) =>
                                dispach({
                                    type: "SET_CITY",
                                    city: e.target.value,
                                })
                            }
                        />
                        {empty.c && (
                            <div className="empty">
                                {empty.c} Can't Be Empty
                            </div>
                        )}
                    </div>
                    <button onClick={sendData} type="button">
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
