import React from "react";
import { Product } from "../../../components";

import "./Products.css";

const Products = ({ products, title }) => {
    return (
        <div className="products">
            <h3 className="title">{title}</h3>
            <div className="container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        button
                        rating={5}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
