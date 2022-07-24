import React from "react";
// Import Components
import {
    Header,
    Banner,
    Card,
    Contact,
    Services,
    Footer,
} from "../../components";
// Import Images
import img1 from "../../images/blog/PlantTherapy-PupPony-ApplicationBooklet-Horse.jpg";
// Import CSS
import "./Blog.css";

const post = {
    id: 1,
    image: img1,
    date: "10/06/2022",
    category: "Category 1",
    title: "Planting Kindness for St. Jude Children’s Research Hospital",
    content:
        "For the month of July, join us in supporting St. Jude Children’s Research Hospital! By leading the way in helping the world to understand, treat, and defeat childhood cancer and other life-threatening diseases, thousands of young lives have been saved since the hospital’s opening more than 50 years ago. While the hospital’s mission is to advance cures for pediatric catastrophic diseases, they notably offer an incredible peace of mind to the families of children in need of care. Thanks to considerable donations and programs, St. Jude is able to cover or supplement costs for treatment, travel, housing, and food. That way, families can stay focused on what matters most — their child’s health. ",
};

const Blog = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className="blog">
                <div className="container">
                    <Card post={post} />
                    <Card post={post} />
                    <Card post={post} />
                    <Card post={post} />
                    <Card post={post} />
                    <Card post={post} />
                </div>
            </div>
            <Contact />
            <Services />
            <Footer />
        </>
    );
};

export default Blog;
