import React from "react";
// Import Link
import { Link } from "react-router-dom";
//Import Icons
import { AiOutlineSearch } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <div className="banner flower">
                <h2 className="title">Everyday Essentials</h2>
                <p>By Plant Therapy</p>
                <form>
                    <input type="search" placeholder="Search The Blog" />
                    <AiOutlineSearch className="icon" />
                </form>
            </div>
            <div className="categories">
                <Link to="/category/category1">Category 1</Link>
                <Link to="/category/category2">Category 2</Link>
                <Link to="/category/category3">Category 3</Link>
                <Link to="/category/category4">Category 4</Link>
                <Link to="/category/category5">Category 5</Link>
                <Link to="/category/category6">Category 6</Link>
                <Link to="/category/category7">Category 7</Link>
            </div>
        </>
    );
};

export default Banner;
