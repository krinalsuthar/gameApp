import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardHeader from "./CardHeader";

const CommonCard = ({ data: propsData = [], containerRef = "" }) => {

    const [likedItems, setLikedItems] = useState({});
    const { state } = useLocation();
    const { category } = useParams();
    console.log(state?.isScroll, "state?.isImage")
    // const isScroll = state?.isScroll
    const data = propsData.length ? propsData : state?.info || [];
    const isScroll = state?.isScroll != "" ? true : false
    console.log(state?.icon, "isScroll")

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <>
            {state?.isHeader && (
                <CardHeader title="Trending Games" isImage={state?.isImage} showMore={false} count={state?.info?.length} icon={state?.icon} />
            )}
            <Box sx={{ width: '100%' }}>
                <Box
                    ref={containerRef ?? null}
                    sx={
                        isScroll
                            ? {
                                display: 'flex',
                                overflowX: 'auto',
                                gap: 1,
                                flexWrap: 'nowrap',
                                paddingBottom: 2,
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }
                            : {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))',
                                gap: 2,
                            }
                    }
                >
                    {data?.length > 0 ? (
                        data.map((game, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    backgroundImage: `linear-gradient(0deg, ${game?.color} 10%, transparent 80%), url(${game?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    height: '170px',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    p: 1,
                                    position: 'relative',
                                    minWidth: isScroll ? '145px' : 'auto',
                                    width: isScroll ? '145px' : 'auto',
                                    flexShrink: isScroll ? 0 : undefined,
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

                                <Typography variant="subtitle1" fontWeight={600} sx={{ textAlign: "center" }} noWrap>
                                    {game?.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {game?.text}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography>No matching games found.</Typography>
                    )}
                </Box>
            </Box>

        </>
    );
}
export default CommonCard