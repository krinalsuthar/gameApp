import { Box, Button, CardMedia, Grid, Link, TextField, Typography } from "@mui/material";
import { ImageCarousel } from "../compoennts/commonComponents/ImageCarousel";
import { BoldFireIcon, GiftBoxIcon, LeftArrowIcon, RightArrowIcon } from "../assets/SVGs/allSVGs";
import { useRef, useState } from "react";
import { sportsData, TopGamesData, TrendingGamesData } from "../data/dashboardData";
import CardHeader from "../compoennts/commonComponents/CardHeader";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommonList from "../compoennts/commonComponents/CommonList";
import refer from "../assets/referimage.png"
import underline from "../assets/underline.png"
import CommonCard from "../compoennts/commonComponents/CommonCard";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef(null);

    console.log(TopGamesData.data?.map((item) => item.title))
    const [likedItems, setLikedItems] = useState({});

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredGames = TrendingGamesData.data.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };


    return (
        <Box >
            <Box mb="30px">
                <ImageCarousel />
            </Box>
            <CardHeader handleSearchChange={handleSearchChange} searchTerm={searchTerm} search="true" title="Trending Games" scroll="true" icon={<BoldFireIcon />} containerRef={containerRef} />
            <CommonCard data={filteredGames} containerRef={containerRef} />
            <Box mt={2}>
                <CardHeader search="false" title="Top Sports" scroll="true" icon={<BoldFireIcon />} />
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        justifyContent: "flex-start",

                    }}
                >

                    {TopGamesData.data?.map((data, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundImage: ` url(${data.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                border: '1px solid #ccc',
                                borderRadius: 2,
                                textAlign: 'center',
                                width: { xs: '100%', sm: '45%', md: '145px', lg: '145px' },
                                minWidth: '145px',
                                // height: '170px',
                                height: { lg: "170px", md: "170px", sm: "300px", xs: "400px" },
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                boxSizing: 'border-box',
                                p: 1,

                            }}
                        ></Box>
                    ))}
                </Box>
            </Box>
            <Box mt={2}>
                <CardHeader title="In-Play Matches" search="false" scroll="false" icon={<YouTubeIcon />} />
            </Box>
            <Box >
                <CommonList data={sportsData} />
            </Box>
            <Box mt={2}>
                <CardHeader title="Promotions" search="false" scroll="false" icon={<GiftBoxIcon />} />
            </Box>
            <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", mb: 2 }}>
                <Typography variant="h5">We regret to inform you that no promotions are currently available.</Typography>
                <Typography variant="subtitle2">However, we encourage you to stay connected with us.We are constantly working to provide you with the best promotions tailored just for you.</Typography>
            </Box>
            <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", display: "flex", flexWrap: { lg: "nowrap", md: "nowrap", sm: "nowrap", xs: "wrap" }, justifyContent: "center" }}>
                <Box>
                    <CardMedia
                        component="img"
                        image={refer}
                        alt="Logo"
                    /></Box>
                <Box maxWidth={500} sx={{ margin: "auto" }}>
                    <Typography variant="h3">Refer and Earn</Typography>
                    <Typography sx={{ my: 3 }}>Invite your friends and family to join the Gamekhelo community and enjoy exclusive rewards! Earn +++ bonus for every successful referral!</Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ p: "5px 60px", bgcolor: "#ffc107", color: "black", fontWeight: 600 }}
                    >
                        refer & Earn
                    </Button>
                    <Box mt={2}>
                        <Link href="/common-page" variant="body2">
                            Show more
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default HomePage;
