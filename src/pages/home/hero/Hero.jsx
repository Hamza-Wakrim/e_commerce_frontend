import React, { useEffect, useState } from "react";

// Import Images
import SliderImage1 from "../../../images/hero/PlantTherapy-PupPony-ManeAttractionSet.jpg";
import SliderImage2 from "../../../images/hero/PlantTherapy-PupPony-MansBestFriendSet.jpg";
import SliderImage3 from "../../../images/hero/PlantTherapy-PupPony-MansBestFriendSet.jpg";
import SliderImage4 from "../../../images/hero/PlantTherapy-PupPony-MansBestFriendSet.jpg";

// Import Icons
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

// Import CSS
import "./Hero.css";

const Hero = () => {
    const images = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];
    const [index, setIndex] = useState(0);
    const [size, setSize] = useState(0);

    const preve = () => {
        if (index <= 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const next = () => {
        if (index >= images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    setTimeout(() => {
        if (index >= images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, 5000);

    useEffect(() => {
        setSize(document.querySelector(".slider").clientWidth);
    });

    return (
        <div className="hero">
            <div
                style={{ transform: `translateX(-${index * size}px)` }}
                className="slider"
            >
                {images.map((image, i) => (
                    <div key={i} className="item">
                        <img key={i} src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className="controle">
                <div className="dots">
                    {images.map((image, i) => (
                        <div
                            onClick={() => setIndex(i)}
                            key={i}
                            className={index === i ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
                <div className="btns">
                    <button onClick={preve} className="btn left">
                        <AiOutlineArrowLeft />
                    </button>
                    <button onClick={next} className="btn right">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <div className="buy">
                <p>Buy Products. Get Promos</p>
                <button>BUY NOW</button>
            </div>
        </div>
    );
};

export default Hero;
