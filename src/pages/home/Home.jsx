import React, { useContext } from "react";
// Import React Components
import { Header, Contact, Services, Footer } from "../../components";
import Hero from "./hero/Hero";
import Products from "./products/Products";
// Import React Context
import { productsContext } from "../../App";

const Home = () => {
    const { products } = useContext(productsContext);
    const lovedProducts = products.filter((product) => product.isLoved);
    const meilleursProducts = products.filter(
        (product) => product.isMeilleursOffers
    );
    return (
        <div>
            <Header />
            <Hero />
            <Products products={lovedProducts} title={"Products You'll Love"} />
            <Products products={meilleursProducts} title={"Meilleurs Offres"} />
            <Contact />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
