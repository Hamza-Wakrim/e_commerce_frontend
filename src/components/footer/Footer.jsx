import React from "react";
import Logo from "../../images/logo.jpg";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <div className="box">
                        <h3 className="title">Contact Us</h3>
                        <p>Phone: +2126-88-40-28-44</p>
                        <p>Email: support@contact.ma</p>
                    </div>
                    <div className="box">
                        <h3 className="title">Customer Service</h3>
                        <p>Contact Us</p>
                    </div>
                    <div className="box">
                        <h3 className="title">Learn</h3>
                        <p>Why Plant Therapy</p>
                    </div>
                </div>
                <div className="right">
                    <img src={Logo} alt="logo" />
                    <h3 className="title">AromapediaLab</h3>
                    <p>Casablanca</p>
                    <p>Maarif</p>
                    <p>Email: support@contact.ma</p>
                    <p>Phone: +2126-88-40-28-44</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
