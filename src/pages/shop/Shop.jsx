// Import Hooks
import React, { useState, useContext } from "react";
import useFilter from "../../hooks/useFilter";
import { useParams } from "react-router-dom";
// Import Components
import { Header, Product, Footer } from "../../components";
import QuickView from "./quick view/QuickView";
// Import Context
import { productsContext } from "../../App";
// Import CSS
import "./Shop.css";

const Shop = () => {
    const { products } = useContext(productsContext);
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);
    const { productCategoy } = useParams();
    const product = products.filter((p) => p.name === name)[0];
    const productsCat = useFilter(products, "category", productCategoy);

    return (
        <>
            <Header />
            <div className="shop">
                {active ? (
                    <QuickView setActive={setActive} product={product} />
                ) : (
                    ""
                )}
                <div className="shop-banner">
                    <div className="content">
                        <h2 className="title">{productCategoy}</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Delectus, officia.
                        </p>
                    </div>
                </div>
                <div className="container">
                    {productsCat.length > 0 ? (
                        productsCat.map((product) => (
                            <Product
                                key={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                setName={setName}
                                setActive={setActive}
                            />
                        ))
                    ) : (
                        <h3>No Products to Show</h3>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
