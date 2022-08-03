import React, { useContext } from "react";
import { Footer, Header, Product } from "../../components";
import Order from "./order/Order";
import { BsFillPencilFill } from "react-icons/bs";
import { productsContext } from "../../App";
import "./Profile.css";

const Profile = () => {
    const { products } = useContext(productsContext);
    return (
        <div>
            <Header />
            <main className="profile">
                <div className="container">
                    <div className="profile-container">
                        <h2 className="profile-title">Votre compte</h2>
                        <div className="box">
                            <div className="user-info">
                                <div className="user-info-header">
                                    <h3 className="user-info-title">
                                        INFORMATIONS PERSONNELLES
                                    </h3>
                                    <div>
                                        <BsFillPencilFill />
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="user-name">User Name</div>
                                    <div className="user-email">Email</div>
                                    <div className="user-phone">Phone</div>
                                    <div className="user-gender">gender</div>
                                    <div className="user-birthday">
                                        birthday
                                    </div>
                                </div>
                                <button type="button" className="change">
                                    Change Password
                                </button>
                            </div>
                            <div className="user-adresses">
                                <div className="user-adresses-header">
                                    <h3 className="user-adresses-title">
                                        ADRESSES
                                    </h3>
                                    <div>
                                        <BsFillPencilFill />
                                    </div>
                                </div>
                                <div className="adresses">
                                    <div className="full-name">Full Name</div>
                                    <div className="adresse">Adresse</div>
                                    <div className="region">Region</div>
                                    <div className="phone">Phone</div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="orders">
                                <h3 className="oders-title">Orders</h3>
                                <Order />
                                <Order />
                                <Order />
                                <Order />
                                <Order />
                            </div>
                        </div>
                    </div>
                    <div className="recomended">
                        <div className="title">Recommended Products</div>
                        <div className="products">
                            {products.map((product) =>
                                product.featured ? (
                                    <Product product={product} />
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
