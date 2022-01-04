import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
        image: "assets/carousel/ecomm1.jpg",
        caption: "Match Perfect",
    },
    {
        image: "assets/carousel/ecomm2.jpg",
        caption: "Neutral Beige",
    },
    {
        image: "assets/carousel/ecomm3.jpg",
        caption: "Fashion",
    }
]

export default function HeaderCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item>
                        <img className="fill"
                            src={slide.image}
                            alt="Carousel Image"
                        />
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}