import { Box, useTheme } from '@mui/material';
import image1 from "../../assets/dashboardImage1.jpg"
import image2 from "../../assets/dashboardImage2.jpg"
import image3 from "../../assets/dashboardImage3.jpg"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
    image1,
    image2,
    image3
];


export const ImageCarousel = () => {
    const theme = useTheme();

    const settings = {
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
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

export const ImageCarouselWithHeader = () => {
    const theme = useTheme();
    const sliderRef = useRef(null);

    const settings = {
        lazyLoad: 'ondemand',
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, // arrows hidden inside carousel
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
            {/* Header with arrows */}
            {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    px: 2,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Dashboard Carousel
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                        onClick={() => sliderRef.current?.slickPrev()}
                        sx={{ backgroundColor: '#ffc107', border: '1px solid black' }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => sliderRef.current?.slickNext()}
                        sx={{ backgroundColor: '#ffc107', border: '1px solid black' }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box> */}

            {/* Slick Carousel */}
            <Slider {...settings} ref={sliderRef}>
                {images.map((src, index) => (
                    <Box key={index} sx={{ px: 1 }}>
                        <img
                            data-lazy={src}
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

export default ImageCarouselWithHeader;
