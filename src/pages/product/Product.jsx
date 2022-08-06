// Import Hooks
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
// Import Components
import { Header, Product, Footer } from "../../components";
// Import Context
import { productsContext } from "../../App";
// Import CSS
import "./Product.css";
import ProductInfo from "./productInfo/ProductInfo";
import { AiFillStar } from "react-icons/ai";

const ProductPage = () => {
    const { products } = useContext(productsContext);
    const [infoKey, setInfoKey] = useState("description");
    const { id } = useParams();
    const product = products.filter((product) => product.name === id)[0];
    const featuredProducts = products.filter((product) => product.featured);

    const filterBtns = () => {
        const btns = document.querySelectorAll(".btns button");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });
                btn.classList.add("active");
            });
        });
    };

    filterBtns();

    return (
        <div>
            {product ? (
                <>
                    <Header />
                    <div className="product-page">
                        <div className="container">
                            <ProductInfo product={product} />
                            <div className="description">
                                <div className="btns">
                                    <button
                                        onClick={() =>
                                            setInfoKey("description")
                                        }
                                        className="active"
                                    >
                                        DESCRIPTION
                                    </button>
                                    <button
                                        onClick={() => setInfoKey("directions")}
                                    >
                                        DIRECTIONS
                                    </button>
                                    <button
                                        onClick={() =>
                                            setInfoKey("testReports")
                                        }
                                    >
                                        TEST REPORTS
                                    </button>
                                    <button
                                        onClick={() =>
                                            setInfoKey("disclaimers")
                                        }
                                    >
                                        DISCLAIMERS
                                    </button>
                                </div>
                                <div
                                    className="content"
                                    dangerouslySetInnerHTML={{
                                        __html: product[infoKey],
                                    }}
                                >
                                    {}
                                </div>
                            </div>
                            <div className="tranding">
                                <h2 className="title">Customers Also Viewed</h2>
                                <div className="products">
                                    {featuredProducts.map((product) => (
                                        <Product
                                            key={product.id}
                                            product={product}
                                            rating={5}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="reviews">
                                <h2 className="title">REVIEWS</h2>
                                <div className="rating">
                                    <div className="reviews-number">5</div>
                                    <div className="stars">
                                        <AiFillStar className="star-icon" />
                                        <AiFillStar className="star-icon" />
                                        <AiFillStar className="star-icon" />
                                        <AiFillStar className="star-icon" />
                                        <AiFillStar className="star-icon" />
                                    </div>
                                    <span>300 Reviews</span>
                                </div>
                                <div className="comments">
                                    <div className="comment">
                                        <div className="user-info">
                                            <div className="avatar">K</div>
                                            <div className="user-rate">
                                                <div className="user-name">
                                                    Kris
                                                </div>
                                                <div className="stars">
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-rec">
                                            <p>
                                                <span>
                                                    Recommended Product:
                                                </span>{" "}
                                                Yes
                                            </p>
                                            <p>
                                                <span>Uses Product For:</span>{" "}
                                                Body Care, Fragrance
                                            </p>
                                        </div>
                                        <div className="review">
                                            <div className="review-title">
                                                All in for Allspice
                                            </div>
                                            <div className="review-body">
                                                I believe Allspice is one of the
                                                best winter oils! I love it in
                                                blends for pain, but I also love
                                                it in the diffuser. I love the
                                                smell of allspice, orange, and
                                                clove in the diffuser!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <div className="user-info">
                                            <div className="avatar">K</div>
                                            <div className="user-rate">
                                                <div className="user-name">
                                                    Kris
                                                </div>
                                                <div className="stars">
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-rec">
                                            <p>
                                                <span>
                                                    Recommended Product:
                                                </span>{" "}
                                                Yes
                                            </p>
                                            <p>
                                                <span>Uses Product For:</span>{" "}
                                                Body Care, Fragrance
                                            </p>
                                        </div>
                                        <div className="review">
                                            <div className="review-title">
                                                All in for Allspice
                                            </div>
                                            <div className="review-body">
                                                I believe Allspice is one of the
                                                best winter oils! I love it in
                                                blends for pain, but I also love
                                                it in the diffuser. I love the
                                                smell of allspice, orange, and
                                                clove in the diffuser!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <div className="user-info">
                                            <div className="avatar">K</div>
                                            <div className="user-rate">
                                                <div className="user-name">
                                                    Kris
                                                </div>
                                                <div className="stars">
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                    <AiFillStar className="star-icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-rec">
                                            <p>
                                                <span>
                                                    Recommended Product:
                                                </span>{" "}
                                                Yes
                                            </p>
                                            <p>
                                                <span>Uses Product For:</span>{" "}
                                                Body Care, Fragrance
                                            </p>
                                        </div>
                                        <div className="review">
                                            <div className="review-title">
                                                All in for Allspice
                                            </div>
                                            <div className="review-body">
                                                I believe Allspice is one of the
                                                best winter oils! I love it in
                                                blends for pain, but I also love
                                                it in the diffuser. I love the
                                                smell of allspice, orange, and
                                                clove in the diffuser!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <h1>Loading ....</h1>
            )}
        </div>
    );
};

export default ProductPage;
