import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logo.jpg";
import { productsContext } from "../../App";

import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { categories } = useContext(productsContext);

    console.log();

    return (
        <header>
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <FaBars className="icon" onClick={() => setOpen(true)} />
                    <ul className={open ? "active" : ""}>
                        <FaTimes
                            className="icon"
                            onClick={() => setOpen(false)}
                        />
                        <li className="level-1">
                            <span>Whats new</span>
                            <ul></ul>
                        </li>
                        <li onClick={() => setOpen2(true)} className="level-1">
                            <span>Shop</span>
                            <ul className={open2 ? "active" : ""}>
                                {/* <FaTimes
                                    className="icon"
                                    onClick={setOpen2(false)}
                                /> */}
                                {categories.map((category) => (
                                    <li key={category.id} className="level-2">
                                        <Link to={`/${category.name}`}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="level-1">
                            <span>Learn</span>
                            <ul></ul>
                        </li>
                        <li className="level-1">
                            <Link to="/blog">
                                <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <AiOutlineSearch className="search-icon" />
                </div>
                <div className="account">
                    <ul>
                        <li>
                            <AiOutlineUser />
                            <span>Account</span>
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                            <span>Cart</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
