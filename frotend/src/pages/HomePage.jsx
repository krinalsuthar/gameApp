import { Box } from "@mui/material";
import { ImageCarousel } from "../components/commonComponents/ImageCarousel";
import { BoldFireIcon, GiftBoxIcon } from "../assets/SVGs/allSVGs";
import { useEffect, useRef, useState } from "react";
import { liveSportsData, TopGamesData, TrendingGamesData } from "../data/dashboardData";
import CardHeader from "../components/commonComponents/CardHeader";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommonList from "../components/commonComponents/CommonList";
import CommonCard from "../components/commonComponents/CommonCard";
import PromotionRefer from "../components/commonComponents/PromotionRefer";
import { useQuery } from "@tanstack/react-query";
import { getGameData } from "../api/authApi";
import { useSelector } from "react-redux";
import { groupInPlaySportsData } from "../components/commonComponents/reusableFunctions";

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
    const { data: images } = useQuery({ queryKey: ["posterData"], queryFn: getGameData })
    const imageData = images?.data?.map((item) => item.apiUrl)
    const [groupedSportsData, setGroupedSportsData] = useState([]);
    const games = useSelector((state) => state.fancyMarkets);
    useEffect(() => {
        const filteredAndGroupedData = groupInPlaySportsData(games, searchTerm);
        setGroupedSportsData(filteredAndGroupedData);
    }, [games, searchTerm]);

    return (
        <Box >
            <Box mb="30px">
                <ImageCarousel images={imageData} />
            </Box>
            <CardHeader handleSearchChange={handleSearchChange} showMoreData={filteredGames}
                searchTerm={searchTerm} search="true" title="Trending Games" scroll="true" icon={<BoldFireIcon />} containerRef={topSport} />
            <CommonCard data={filteredGames} title="Trending Games" containerRef={topSport} />
            <CardHeader search="false" title="Top Sports" showMoreData={TopGamesData?.data}
                scroll="true" icon={<BoldFireIcon />} data={filteredGames} containerRef={containerRef} />
            <CommonCard data={TopGamesData?.data} title="Top Sports" containerRef={containerRef} favourite={false} />
            <Box mt={2}>
                <CardHeader title="In-Play Matches" search="false" showMoreData={liveSportsData} scroll="false" icon={<YouTubeIcon />} />
            </Box>
            <Box >
                <CommonList data={groupedSportsData} />
            </Box>
            <Box mt={2}>
                <CardHeader title="Promotions" search="false" scroll="false" icon={<GiftBoxIcon />} />
            </Box>
            <PromotionRefer />
        </Box >
    );
};

export default HomePage;
