import { Box, useTheme } from '@mui/material';
import image1 from "../../assets/dashboardImage1.jpg"
import image2 from "../../assets/dashboardImage2.jpg"
import image3 from "../../assets/dashboardImage3.jpg"
import Slider from 'react-slick';
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
