import React from 'react';
import Slider from 'react-slick';
import { Box, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/dashboardImage1.jpg"
import image2 from "../../assets/dashboardImage2.jpg"
import image3 from "../../assets/dashboardImage3.jpg"


const images = [
    image1,
    image2,
    image3
];


const ImageCarousel = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ width: '100%', mx: 'auto' }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <Box key={index} sx={{ px: 1, width: "100%" }}>
                        <img
                            src={src}
                            alt={`slide-${index}`}
                            style={{
                                width: '100%',
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: theme.shadows[3],
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageCarousel;
