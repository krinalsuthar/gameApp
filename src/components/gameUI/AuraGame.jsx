import React from 'react';
import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Paper,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigationBar from '../commonComponents/BottomNAvigation';

const AuraGame = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For mobile layout control

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    // height: '100vh',
                    bgcolor: '#f5f5f5',
                    backgroundImage: 'url("/pattern-bg.png")',
                    backgroundSize: 'cover',
                    p: { xs: 1, sm: 2 },
                    gap: 2,
                }}
            >
                {/* Left Sidebar */}
                <Box
                    sx={{
                        width: { xs: '100%', md: 200 },
                        textAlign: 'center',
                    }}
                >
                    <Box sx={{ mb: 2 }}>
                        <img src="/logo.png" alt="Logo" style={{ width: isMobile ? 100 : 120 }} />
                    </Box>
                    <Button
                        startIcon={<HomeIcon />}
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: 0,
                            bgcolor: 'white',
                            border: '1px solid #ddd',
                        }}
                    >
                        Lobby
                    </Button>
                </Box>

                {/* Center Image Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', sm: 400 },
                            height: { xs: 200, sm: 400 },
                            position: 'relative',
                            borderRadius: 2,
                            overflow: 'hidden',
                            bgcolor: '#000',
                            boxShadow: 2,
                        }}
                    >
                        {/* Image or GIF */}
                        <img
                            src="https://i.pinimg.com/736x/46/12/df/4612dff6c929789e40b5e5338e3a1017.jpg"
                            alt="Roulette"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain', // Shows entire image responsively
                            }}
                        />

                        {/* Timer Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                bgcolor: '#00FF00',
                                color: '#000',
                                px: 1,
                                borderRadius: '50%',
                                fontWeight: 600,
                                fontSize: 12,
                            }}
                        >
                            00:00
                        </Box>
                    </Box>
                </Box>

                {/* Right Panel */}
                <Box
                    sx={{
                        width: { xs: '100%', md: 300 },
                        px: { xs: 0, md: 2 },
                    }}
                >
                    {/* Credit Info */}
                    <Paper
                        sx={{
                            p: 1,
                            mb: 2,
                            bgcolor: '#0d3b4c',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="subtitle2">Available Credit: 0.00</Typography>
                    </Paper>

                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        sx={{ mb: 2 }}
                    >
                        Betting Profit and Loss
                    </Button>

                    {/* Betslip Section */}
                    <Box
                        sx={{
                            bgcolor: 'white',
                            borderRadius: 1,
                            p: 2,
                            mb: 2,
                        }}
                    >
                        <Tabs
                            value={0}
                            variant="fullWidth"
                            sx={{ mb: 2 }}
                        >
                            <Tab label="Betslip" />
                            <Tab label="Open Bets" />
                        </Tabs>

                        <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{ mb: 1 }}
                        >
                            Edit Stakes
                        </Button>

                        <Typography variant="body2" textAlign="center">
                            Click on the odds to add selections to the betslip.
                        </Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Game Rules
                    </Button>
                </Box>
            </Box>
            {/* <BottomNavigationBar /> */}
        </>
    );
};

export default AuraGame;
