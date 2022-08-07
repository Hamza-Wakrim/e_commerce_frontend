import React, {useState, useContext} from "react";
import {FaShoppingCart,FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logo.jpg";
import {productsContext} from "../../App";

import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {
    const [level1, setLevel1] = useState(false);
    const [level2, setLevel2] = useState(false);
    const [level3, setLevel3] = useState(false);
    const {categories, products, user} = useContext(productsContext);
    return (
        <header>
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                    <FaBars className="icon" onClick={() => setLevel1(true)}/>
                    <ul className={level1 ? "active" : ""}>
                        <FaTimes
                            className="icon"
                            onClick={() => setLevel1(false)}
                        />
                        {/*<li className="level-1">*/}
                        {/*    <span>Whats new</span>*/}
                        {/*    <ul></ul>*/}
                        {/*</li>*/}
                        <li onClick={() => setLevel2(true)} className="level-1">
                            <span>Shop</span>
                            <ul className={level2 ? "active" : ""}>
                                {/* <FaTimes
                                    className="icon"
                                    onClick={setOpen2(false)}
                                /> */}
                                {categories.map((category) => (
                                    <li
                                        onClick={() => setLevel3(true)}
                                        key={category.id}
                                        className="level-2"
                                    >
                                        <Link
                                            key={category.id}
                                            to={`/${category.name}`}
                                        >
                                            <span>{category.name}</span>
                                        </Link>
                                        <ul className={level3 ? "active" : ""}>
                                            <FaTimes
                                                className="icon"
                                                onClick={() => setLevel3(false)}
                                            />
                                            {products.map((product) =>
                                                product.category.name ===
                                                category.name ? (
                                                    <li
                                                        key={product.id}
                                                        className="level-3"
                                                    >
                                                        <Link
                                                            to={`/product/${product.name}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    ""
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/*<li className="level-1">*/}
                        {/*    <span>Learn</span>*/}
                        {/*    <ul></ul>*/}
                        {/*</li>*/}
                        <li className="level-1">
                            <span>
                                <Link to="/blog">Blog</Link>
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <AiOutlineSearch className="search-icon"/>
                </div>
                <div className="account">
                    <ul>
                        <li>
                            {user ? (
                                <Link to={`/user/${user.id}`}>
                                    <FaUserAlt/>
                                    <span>{user.name}</span>
                                </Link>
                            ) : (

                                <Link to="/login">
                                    <FaUserAlt/>
                                    <span>Login</span>
                                </Link>
                            )}
                        </li>
                        <li>
                            <Link to="/cart">
                                <FaShoppingCart/>
                                <span>Cart</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
