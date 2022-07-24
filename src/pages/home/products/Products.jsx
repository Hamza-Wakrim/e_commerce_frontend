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
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        button
                        rating={5}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
