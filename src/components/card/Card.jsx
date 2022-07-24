import React from "react";
// Import Icon
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
// Import Link
import { Link } from "react-router-dom";
// Import CSS
import "./Card.css";

const Card = ({ post }) => {
    return (
        <div className="card">
            <div className="image">
                <Link to="/">
                    <img src={post.image} alt="" />
                </Link>
            </div>
            <div className="box">
                <div className="info">
                    <div className="date">
                        <AiOutlineCalendar className="icon" />
                        <span>{post.date}</span>
                    </div>
                    <div className="category">
                        <BiCategoryAlt className="icon" />
                        <span>{post.category}</span>
                    </div>
                </div>
                <div className="content">
                    <Link to="/" className="article-title">
                        {post.title}
                    </Link>
                    <div className="article-content">
                        {post.content
                            .split(" ")
                            .slice(0, 21)
                            .join(" ")}
                        ...
                    </div>
                </div>
                <Link to="/">Read More</Link>
            </div>
        </div>
    );
};

export default Card;
