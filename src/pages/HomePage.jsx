import { Box, Button, CardMedia, Link, Typography } from "@mui/material";
import { ImageCarousel } from "../components/commonComponents/ImageCarousel";
import { BoldFireIcon, GiftBoxIcon } from "../assets/SVGs/allSVGs";
import { useRef, useState } from "react";
import { sportsData, TopGamesData, TrendingGamesData } from "../data/dashboardData";
import CardHeader from "../components/commonComponents/CardHeader";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommonList from "../components/commonComponents/CommonList";
import refer from "../assets/referimage.png"
import CommonCard from "../components/commonComponents/CommonCard";
import image1 from "../assets/dashboardImage1.jpg"
import image2 from "../assets/dashboardImage2.jpg"
import image3 from "../assets/dashboardImage3.jpg"
const images = [
    image1,
    image2,
    image3
];

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const topSport = useRef(null);
    const containerRef = useRef(null)
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredGames = TrendingGamesData.data.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <Box >
            <Box mb="30px">
                <ImageCarousel images={images} />
            </Box>
            <CardHeader handleSearchChange={handleSearchChange} showMoreData={filteredGames}
                searchTerm={searchTerm} search="true" title="Trending Games" scroll="true" icon={<BoldFireIcon />} containerRef={topSport} />
            <CommonCard data={filteredGames} title="Trending Games" containerRef={topSport} />
            <CardHeader search="false" title="Top Sports" showMoreData={TopGamesData?.data}
                scroll="true" icon={<BoldFireIcon />} data={filteredGames} containerRef={containerRef} />
            <CommonCard data={TopGamesData?.data} title="Top Sports" containerRef={containerRef} favourite={false} />
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
                        {/* CommonNavLink used remain */}
                        <Link href="/common-page" variant="body2">
                            Show more
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* <BottomNavWithRadialMenu /> */}
        </Box >
    );
};

export default HomePage;
