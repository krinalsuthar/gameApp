import { Box } from "@mui/material";
import { ImageCarousel } from "../components/commonComponents/ImageCarousel";
import { BoldFireIcon, CricketIcon, GiftBoxIcon, SoccerIcon, TennisIcon } from "../assets/SVGs/allSVGs";
import { useEffect, useRef, useState } from "react";
import { liveSportsData, sportsData, TopGamesData, TrendingGamesData } from "../data/dashboardData";
import CardHeader from "../components/commonComponents/CardHeader";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommonList from "../components/commonComponents/CommonList";
import CommonCard from "../components/commonComponents/CommonCard";
import PromotionRefer from "../components/commonComponents/PromotionRefer";
import { useQuery } from "@tanstack/react-query";
import { getGameData, getMarketMatchData } from "../api/authApi";
import { useSelector } from "react-redux";

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
    const sportIconMap = {
        "4": CricketIcon,
        "1": SoccerIcon,
        "2": TennisIcon
    };
    useEffect(() => {
        if (games?.data) {
            const newGroupedData = games?.data?.data?.map(sportItem => {
                const doc = sportItem.doc || [];
                const groupedByTournament = doc.reduce((acc, match) => {

                    const tournamentId = match?.tournament?.id;
                    const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';
                    const isPlay = match?.isPlay
                    const marketId = match?.marketId
                    const numOfBookmaker = match?.numOfBookmaker
                    const numOfFancy = match?.numOfFancy
                    const openDate = match?.openDate
                    const sport = match?.sport
                    const tournament = match?.tournament
                    if (tournamentId && match.isPlay) {
                        if (!acc[tournamentName]) {
                            acc[tournamentName] = {
                                id: tournamentId,
                                title: tournamentName,
                                matches: [],
                            };
                        }
                        acc[tournamentName].matches.push({
                            name: match?.name?.trim(),
                            id: match?.id,
                            isPlay: isPlay,
                            marketId: marketId,
                            numOfBookmaker: numOfBookmaker,
                            numOfFancy: numOfFancy,
                            openDate: openDate,
                            sport: sport,
                            tournament: tournament,
                        });
                    }
                    return acc;
                }, {});
                return {
                    id: sportItem._id,
                    name: sportItem.name,
                    leagues: Object.values(groupedByTournament),
                    icon: sportIconMap[sportItem._id] || null
                };
            });
            const filteredAndGroupedData = newGroupedData.map((sport, index) => {
                return ({
                    ...sport,
                    leagues: sport.leagues.map(league => ({
                        ...league,
                        matches: league.matches.filter(match => match.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    })).filter(league => league.matches.length > 0)
                });
            }).filter(sport => sport.leagues.length > 0);
            setGroupedSportsData(filteredAndGroupedData);
        }
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
