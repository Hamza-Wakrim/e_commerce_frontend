import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact flower">
            <h2 className="title">Want to get all the latest news first?</h2>
            <div className="container">
                <p className="discount">
                    Sign up for our emails and get a one-time use code for $10
                    off of a $25 purchase! Plus, sign up for SMS and get an
                    instant 15% off coupon! *
                </p>
                <p className="offer">
                    *Offer for new subscribers only. Customers must be logged in
                    to their account in order to apply discount to purchase.
                </p>
                <form>
                    <div className="email">
                        <input type="email" placeholder="Email Address" />
                        <button type="submite">Subscribe</button>
                    </div>
                    <div className="phone">
                        <input type="phone" placeholder="US Mobile Number" />
                        <button type="submite">Subscribe</button>
                        <p className="description">
                            By subscribing to Plant Therapy, you consent to
                            receive autodialed messages to the number used at
                            opt-in. Message frequency will vary. Consent is not
                            a condition of the purchase of goods or services.
                            Message and data rates may apply. Reply STOP to
                            cancel. Reply HELP for help. T&Cs PRIVACY POLICY
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
