import { Box, useTheme, keyframes } from '@mui/material';
import image1 from "../../assets/dashboardImage1.jpg"
import image2 from "../../assets/dashboardImage2.jpg"
import image3 from "../../assets/dashboardImage3.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const image = [
    image1,
    image2,
    image3
];

export const ImageCarousel = ({ images }) => {
    const img = images ? images : image
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
                {img.map((src, index) => (
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


const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CircularAnimatedImageLayout = ({ images, radius = 100, size = 50, duration = 10 }) => {
    const centerOffset = radius + size / 2;

    return (
        <Box
            sx={{
                position: 'relative',
                width: centerOffset * 2,
                height: centerOffset * 2,
                animation: `${rotate} ${duration}s linear infinite`,
                transformOrigin: 'center center',
            }}
        >
            {images.map((img, index) => {
                const angle = (index / images.length) * 2 * Math.PI;
                const x = Math.cos(angle) * radius + centerOffset - size / 2;
                const y = Math.sin(angle) * radius + centerOffset - size / 2;

                return (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`Image ${index}`}
                        sx={{
                            position: 'absolute',
                            left: `${x}px`,
                            top: `${y}px`,
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid white',
                            boxShadow: 2,
                        }}
                    />
                );
            })}
        </Box>
    );
};
