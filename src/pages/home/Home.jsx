import React, { useContext } from "react";
// Import React Components
import { Header, Contact, Services, Footer } from "../../components";
import Hero from "./hero/Hero";
import Products from "./products/Products";
// Import React Context
import { productsContext } from "../../App";

const Home = () => {
    const { products } = useContext(productsContext);
    const featuredProduct = products.filter((product) => product.featured);
    const newProduct = products.filter((product) => product.new_product);
    return (
        <div>
            <Header />
            <Hero />
            <Products
                products={featuredProduct}
                title={"Products You'll Love"}
            />
            <Products products={newProduct} title={"Meilleurs Offres"} />
            <Contact />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
