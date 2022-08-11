import React, { useContext } from "react";
import { Footer, Header, Product } from "../../components";
import Order from "./order/Order";
import { BsFillPencilFill } from "react-icons/bs";
import { productsContext } from "../../App";
import "./Profile.css";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
    const { products, user } = useContext(productsContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/", { replace: true });
    };

    return (
        <div>
            {!user && <Navigate to="/login" />}
            <Header />
            <main className="profile">
                <div className="container">
                    <div className="profile-container">
                        <div className="profile-header">
                            <h2 className="profile-title">Votre compte</h2>
                            <button onClick={logout} className="logout">
                                Logout
                            </button>
                        </div>
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
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-email">
                                        {user.email}
                                    </div>
                                    <div className="user-phone">
                                        {user.phone}
                                    </div>
                                    <div className="user-birthday">
                                        {user.birthday}
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
                                    <div className="full-name">
                                        {user.first_name} {user.last_name}
                                    </div>
                                    <div className="adresse">
                                        {user.address}
                                    </div>
                                    <div className="region">{user.city}</div>
                                    <div className="phone">{user.phone}</div>
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
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
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
