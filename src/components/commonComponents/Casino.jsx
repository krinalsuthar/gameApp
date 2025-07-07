import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom"
import CardHeader from "./CardHeader";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Casion = () => {
    const location = useLocation();
    const data = location?.state?.data.filter(Boolean);
    const [likedItems, setLikedItems] = useState({});
    const containerRef = useRef(null);
    console.log(data?.map((item) => item?.title))

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <>

            {data?.length > 0 ? (
                data?.map((game, idx) => (
                    <Box>
                        <CardHeader
                            title={game?.title}
                            scroll="true"
                            containerRef={containerRef}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                padding: 2,
                                flexWrap: "nowrap"
                            }}
                        >
                            <Box
                                ref={containerRef}
                                sx={{
                                    display: "flex",
                                    overflowX: "scroll",
                                    gap: 1,
                                    justifyContent: "flex-start",
                                    scrollbarWidth: 'none',
                                    '-ms-overflow-style': 'none',
                                    '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                    paddingBottom: 2,
                                }}
                            >
                                {
                                    game?.info?.map((game) => (

                                        <Box
                                            key={idx}
                                            sx={{
                                                position: 'relative',
                                                backgroundImage: `linear-gradient(0deg, ${game.color} 10%, transparent 80%), url(${game.image})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                border: '1px solid #ccc',
                                                borderRadius: 2,
                                                textAlign: 'center',
                                                width: '145px',
                                                minWidth: '145px',
                                                height: '170px',
                                                color: 'white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                boxSizing: 'border-box',
                                                p: 1,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 8,
                                                    right: 8,
                                                    zIndex: 2,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => toggleLike(idx)}
                                            >
                                                {likedItems[idx] ? (
                                                    <FavoriteIcon sx={{ color: 'red' }} />
                                                ) : (
                                                    <FavoriteBorderIcon sx={{ color: '#fff' }} />
                                                )}
                                            </Box>

                                            <Box sx={{ borderRadius: 1 }}>
                                                <Typography variant="subtitle1" fontWeight={600} noWrap>
                                                    {game.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                    }}
                                                >
                                                    {game.text}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                ))
            ) : (
                <Box sx={{ textAlign: "center", width: "100%" }}>
                    <Typography>No matching games found.</Typography>
                </Box>
            )}
        </>
    );
}

export default Casion