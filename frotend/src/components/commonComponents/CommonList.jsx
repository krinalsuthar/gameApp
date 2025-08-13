import { Box, Typography, Chip, Grid, Badge, useTheme } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { CricketIcon, TennisIcon, SoccerIcon } from '../../assets/SVGs/allSVGs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ImageCarousel } from './ImageCarousel';
import { Link as RouterLink } from 'react-router-dom';

const getTagColor = (tag) => {
    switch (tag) {
        case true:
            return '#00c853';
        case 'today':
            return '#2196f3';
        case false:
            return '#ff9800';
        case 'saturday':
            return '#ab47bc';
        default:
            return '#00c853';
    }
};

const CommonList = ({ data: propsData = [] }) => {
    const theme = useTheme();
    const location = useLocation();
    const locationData = location.state?.data;
    const isLoggedIN = location.state?.isLoggin ?? true;
    const isImageCarousel = location.state?.isImageCarousel ?? false;
    const data = propsData.length ? propsData : locationData || [];
    const navigate = useNavigate()
    const sportIcons = {
        CRICKET: <CricketIcon sx={{ color: 'red' }} />,
        TENNIS: <TennisIcon sx={{ color: '#33cc00' }} />,
        SOCCER: <SoccerIcon sx={{ color: 'red' }} />,
        FOOTBALL: <SoccerIcon sx={{ color: 'red' }} />
    };
    useEffect(() => {
        if (!isLoggedIN) {
            navigate('/login');
        }
    }, [isLoggedIN, navigate]);

    return (
        <Box>
            {isImageCarousel && <ImageCarousel />}
            {data?.length > 0 ? (
                data.map((sport, sportIndex) => (
                    <Box key={sportIndex} mb={3}>
                        {sport?.leagues?.length > 0 && (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        p: 1,
                                        bgcolor: 'black',
                                        color: 'white',
                                        border: '1px solid red',
                                        borderRadius: '20px 0px 20px 0px',
                                        width: 'fit-content',
                                    }}
                                >
                                    {sportIcons[sport.name] || null}
                                    <Typography fontWeight={600}>{sport?.name}</Typography>
                                </Box>
                                {sport.leagues.map((league, leagueIndex) =>
                                    league?.matches?.map((item, matchIndex) => (
                                        <Box
                                            key={`${leagueIndex}-${matchIndex}`}
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                bgcolor: theme.palette.background.default,
                                                p: 1.5,
                                                mb: 1,
                                                borderRadius: 1,
                                                boxShadow: 1,
                                                textDecoration: 'none',
                                                color: theme.palette.text.primary,
                                            }}
                                            component={RouterLink}
                                            to={`/common-match/${item?.id}`}
                                            state={{
                                                data: league,
                                                marketId: item.marketId?.[0]?.toString(),
                                            }}
                                        >
                                            <Chip
                                                label={item.isPlay ? 'Live' : 'UPCOMING'}
                                                size="small"
                                                sx={{
                                                    bgcolor: getTagColor(item?.isPlay),
                                                    fontWeight: 600,
                                                    mr: 1.5,
                                                    textTransform: 'uppercase',
                                                }}
                                                icon={<PlayCircleFilledWhiteIcon sx={{ fontSize: 16 }} />}
                                            />

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
                                                    {league?.title}
                                                </Typography>
                                                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>

                                            <LiveTvIcon sx={{ fontSize: 20, color: 'green', mx: 1 }} />

                                            {league?.categories?.map(
                                                (cat, index) =>
                                                    cat?.value !== 0 && (
                                                        <Badge
                                                            key={index}
                                                            badgeContent={`${cat?.value}`}
                                                            sx={{
                                                                '& .MuiBadge-badge': {
                                                                    fontSize: '10px',
                                                                    height: 15,
                                                                    minWidth: 15,
                                                                    padding: '0 4px',
                                                                    right: 6,
                                                                    borderRadius: '50%',
                                                                },
                                                            }}
                                                            color="primary"
                                                        >
                                                            <Chip
                                                                label={`${cat?.label}`}
                                                                size="small"
                                                                sx={{
                                                                    borderRadius: '5px',
                                                                    mx: '5px',
                                                                    fontWeight: 500,
                                                                    fontSize: '10px',
                                                                    bgcolor:
                                                                        cat?.label === 'M'
                                                                            ? '#bbdefb'
                                                                            : cat?.label === 'F'
                                                                                ? '#c8e6c9'
                                                                                : cat?.label === 'MO'
                                                                                    ? '#ffe0b2'
                                                                                    : cat?.label === 'O'
                                                                                        ? '#d1c4e9'
                                                                                        : 'grey.300',
                                                                }}
                                                            />
                                                        </Badge>
                                                    )
                                            )}
                                        </Box>
                                    ))
                                )}
                            </>
                        )}
                    </Box>
                ))
            ) : (
                <Typography>No data available.</Typography>
            )}
        </Box>

    );
};

export default CommonList;


