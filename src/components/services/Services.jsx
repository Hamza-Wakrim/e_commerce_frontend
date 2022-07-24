import React from "react";
import { AiOutlineRocket, AiOutlineWallet } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <div className="box">
                <AiOutlineRocket className="icon" />
                <Link to="/">Levraison Gratuite</Link>
            </div>
            <div className="box">
                <AiOutlineWallet className="icon" />
                <Link to="/">Satisfait ou remboursé</Link>
            </div>
            <div className="box">
                <BiSupport className="icon" />
                <Link to="/">Support Online</Link>
            </div>
        </div>
    );
};

export default Services;
