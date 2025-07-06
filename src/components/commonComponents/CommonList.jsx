import { Box, Typography, Chip, Grid } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { CricketIcon, TennisIcon } from '../../assets/SVGs/allSVGs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
    const data = propsData.length ? propsData : locationData || [];
    const navigate = useNavigate()
    console.log(locationData, "wertyui")

    const sportIcons = {
        Cricket: <CricketIcon sx={{ color: 'red' }} />,
        Tennis: <TennisIcon sx={{ color: '#33cc00' }} />,
    };
    useEffect(() => {
        if (!isLoggedIN) {
            navigate('/login');
        }
    }, [isLoggedIN, navigate]);

    return (

        <Box >
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
                            <Typography fontWeight={600}>{sport.sport}</Typography>
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
                                }}
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

                                <LiveTvIcon sx={{ fontSize: 18, color: 'green', mx: 1 }} />

                                <Grid container spacing={1} sx={{ width: 'auto', flexWrap: 'nowrap' }}>
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
