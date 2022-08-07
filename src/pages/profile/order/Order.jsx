import React from "react";
import "./Order.css";

const Order = () => {
    return (
        <div className="order-card">
            <div className="left">
                <img src="https://via.placeholder.com/80" alt="img" />
            </div>
            <div className="center">
                <div className="name">Product Name</div>
                <div className="status">Stauts</div>
                <div className="date">30/06/2022</div>
            </div>
            <div className="right">
                <button>DÉTAILS</button>
            </div>
        </div>
    );
};

export default Order;
