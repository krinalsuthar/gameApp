import { Box, Typography, Chip, Grid, Badge } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { CricketIcon, TennisIcon, SoccerIcon } from '../../assets/SVGs/allSVGs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ImageCarousel } from './ImageCarousel';
import { Link as RouterLink } from 'react-router-dom';

const OddsBox = ({ value, index }) => (
    <Box
        sx={{
            bgcolor: index % 2 === 0 ? '#fce4ec' : '#bbdefb',
            borderRadius: 1,
            textAlign: 'center',
            p: 1,
            fontSize: '0.875rem',
            fontWeight: 500,
            width: 50,
        }}
    >
        {value}
    </Box>
);

const getTagColor = (tag) => {
    switch (tag?.toLowerCase()) {
        case 'live':
            return '#00c853';
        case 'today':
            return '#2196f3';
        case 'tomorrow':
            return '#ff9800';
        case 'saturday':
            return '#ab47bc';
        default:
            return '#9e9e9e';
    }
};

const CommonList = ({ data: propsData = [] }) => {
    const location = useLocation();
    const locationData = location.state?.data;
    const isLoggedIN = location.state?.isLoggin ?? true;
    const isImageCarousel = location.state?.isImageCarousel ?? false;
    const data = propsData.length ? propsData : locationData || [];
    const navigate = useNavigate()
    const sportIcons = {
        Cricket: <CricketIcon sx={{ color: 'red' }} />,
        Tennis: <TennisIcon sx={{ color: '#33cc00' }} />,
        Soccer: <SoccerIcon sx={{ color: 'red' }} />
    };
    useEffect(() => {
        if (!isLoggedIN) {
            navigate('/login');
        }
    }, [isLoggedIN, navigate]);
    return (
        <Box >
            {isImageCarousel && (
                <ImageCarousel />
            )}
            {Array.isArray(data) && data.length > 0 ? (
                data.map((sport, sportIndex) => (
                    <Box key={sportIndex} mb={3}>
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
                            {sportIcons[sport.sport] || null}
                            <Typography fontWeight={600}>{sport?.sport}</Typography>
                        </Box>

                        {sport.matches.map((match, matchIndex) => (
                            <Box
                                key={matchIndex}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    bgcolor: 'white',
                                    p: 1.5,
                                    mb: 1,
                                    borderRadius: 1,
                                    boxShadow: 1,
                                    textDecoration: "none",
                                    color: "#000"
                                }}
                                component={RouterLink}
                                // onClick={() => console.log(match?.teams, "match")}
                                to={`/common-match/${match?.tag}`}
                                state={{ data: match?.info, info: match?.teams }}
                            >
                                <Chip
                                    label={match.tag || 'LIVE'}
                                    size="small"
                                    sx={{
                                        bgcolor: getTagColor(match.tag),
                                        color: 'white',
                                        fontWeight: 600,
                                        mr: 1.5,
                                        textTransform: 'uppercase',
                                    }}
                                    icon={<PlayCircleFilledWhiteIcon sx={{ fontSize: 16 }} />}
                                />

                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        sx={{ fontSize: 12, color: 'text.secondary', fontWeight: 500 }}
                                    >
                                        {match.series}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                                        {match.teams}
                                    </Typography>
                                </Box>
                                <LiveTvIcon sx={{ fontSize: 20, color: 'green', mx: 1 }} />
                                {match?.categories?.map((item, index) => (
                                    item?.value !== 0 && (
                                        <Badge
                                            key={index}
                                            badgeContent={`${item?.value}`}
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
                                                label={`${item?.label}`}
                                                size="small"
                                                sx={{
                                                    borderRadius: '5px',
                                                    mx: '5px',
                                                    fontWeight: 500,
                                                    fontSize: '10px',
                                                    bgcolor:
                                                        item?.label === 'M'
                                                            ? '#bbdefb'
                                                            : item?.label === 'F'
                                                                ? '#c8e6c9'
                                                                : item?.label === 'MO'
                                                                    ? '#ffe0b2'
                                                                    : item?.label === 'O'
                                                                        ? '#d1c4e9'
                                                                        : 'grey.300',
                                                }}
                                            />
                                        </Badge>
                                    )
                                ))}
                                <Grid container spacing={1} sx={{ width: 'auto', flexWrap: 'nowrap', ml: 2 }}>
                                    {match.odds.map((odd, i) => (
                                        <Grid item key={i}>
                                            <OddsBox value={odd} index={i} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                ))
            ) : (
                <Typography>No data available.</Typography>
            )}
        </Box>
    );
};

export default CommonList;
