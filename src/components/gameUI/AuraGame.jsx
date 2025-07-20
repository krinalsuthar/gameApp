import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Paper,
    useTheme,
    useMediaQuery,
    CardMedia,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/aura-logo.png"
import LockIcon from '@mui/icons-material/Lock';
import video from "../../assets/gameVideos/teen-patti.mp4"
import { useLocation } from 'react-router-dom';
import FourIconLoader from '../commonComponents/FourIconLoader';

const AuraGame = () => {
    const theme = useTheme();
    const location = useLocation();
    const { data } = location?.state
    console.log("🚀 ~ AuraGame ~ data:", data)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For mobile layout control
    return (
        <>
            <Box sx={{ display: "flex", gap: 1, mb: 2, width: "100%", flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" } }}>
                {data ? (
                    <>
                        <Box sx={{ width: { lg: "20%", md: "20%", sm: "100%", xs: "100%" }, height: "auto", p: 3 }}>
                            <Box sx={{ mb: 3 }}>
                                <CardMedia
                                    component="img"
                                    image={logo}
                                    alt="Logo"
                                    sx={{ maxWidth: 120, mx: "auto", mb: 2 }}
                                />
                                <hr />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        justifyContent: "center",
                                        mt: 2
                                    }}
                                >
                                    <HomeIcon sx={{ fontSize: 40 }} />
                                    Lobby
                                </Typography>
                            </Box>

                            {/* Team Buttons */}
                        </Box>
                        <Box sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" }, height: "100%" }}>
                            <video
                                src={data}
                                width="100%"
                                // height="100%"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ borderRadius: 10, objectFit: "cover" }}
                            />
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: 'center', mb: 2 }}>
                                {["B", "A", "B", "A", "A", "B", "A", "B", "B"].map((item, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            px: 2,
                                            py: 0.5,
                                            bgcolor: "#214C46",
                                            color: "#fff",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            minWidth: 36,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>

                            {/* Match Title */}
                            <Typography variant='h6' fontWeight="bold" mb={0.5}>TEENPATTI T20</Typography>
                            <Typography variant='body2' color="text.secondary" mb={2}>#161392395</Typography>

                            {/* Match Odds Section */}
                            <Typography variant="subtitle1" mb={1}>Match Odds</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mb: 2 }}>
                                {["Player A", "Player B"].map((player, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            backgroundColor: '#0F1C2E',
                                            color: '#fff',
                                            borderRadius: 2,
                                            p: 2,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "50%"
                                        }}
                                    >
                                        <Typography>{player}</Typography>
                                        <LockIcon />
                                        <Typography>{index === 0 ? "1.98" : "1.98"}</Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Pair Plus Section */}
                            <Typography variant="subtitle1" mb={1}>Pair Plus</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                {["Player A+", "Player B+"].map((player, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            backgroundColor: '#0F1C2E',
                                            color: '#fff',
                                            borderRadius: 2,
                                            p: 2,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "50%"
                                        }}
                                    >
                                        <Typography>{player}</Typography>
                                        <LockIcon />
                                        <Typography>{index === 0 ? "2" : "2"}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ width: { lg: "30%", md: "30%", sm: "100%", xs: "100%", pb: 2 }, bgcolor: "#F5F5F5", height: "100%", p: 2, overflowY: 'auto' }}>
                            {/* Credit Dropdown */}
                            <Box
                                sx={{
                                    bgcolor: '#214C46',
                                    color: '#fff',
                                    p: 1,
                                    borderRadius: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                <Typography fontWeight="bold">Available Credit: 0.00</Typography>
                                <select style={{ border: 'none', outline: 'none' }}>
                                    <option>▼</option>
                                </select>
                            </Box>

                            {/* Betting Profit and Loss Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#2F6D5D',
                                    borderRadius: 1,
                                    mb: 2,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#24594B',
                                    },
                                }}
                            >
                                Betting Profit and Loss
                            </Button>

                            {/* Betslip Tabs */}
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider' }}>
                                    <Button sx={{ flex: 1, borderBottom: '2px solid #ccc', borderRadius: 0 }}>Betslip</Button>
                                    <Button sx={{ flex: 1, borderRadius: 0 }}>Open Bets</Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            ml: 'auto',
                                            height: 36,
                                            borderRadius: 1,
                                            backgroundColor: '#5DB37C',
                                            fontWeight: 'bold',
                                            px: 2,
                                            '&:hover': { backgroundColor: '#4CA36B' },
                                        }}
                                    >
                                        Edit Stakes
                                    </Button>
                                </Box>
                                <Box sx={{ p: 2, bgcolor: '#fff' }}>
                                    <Typography variant="body2">
                                        Click on the odds to add selections to the betslip.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Pair Plus Rules */}
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Pair Plus Rules
                            </Typography>

                            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', mb: 2 }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#ccc' }}>
                                        <th style={{ padding: 8, textAlign: 'left' }}>Hands</th>
                                        <th style={{ padding: 8, textAlign: 'right' }}>Payout</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['PAIR', '1 To 1'],
                                        ['FLUSH', '1 To 4'],
                                        ['STRAIGHT', '1 To 6'],
                                        ['TRIO', '1 To 25'],
                                        ['STRAIGHT FLUSH', '1 To 35'],
                                    ].map(([hand, payout], index) => (
                                        <tr key={hand} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0' }}>
                                            <td style={{ padding: 8 }}>{hand}</td>
                                            <td style={{ padding: 8, textAlign: 'right' }}>{payout}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Box>

                            {/* Game Rules Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1E5348',
                                    borderRadius: 1,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#154237',
                                    },
                                }}
                            >
                                Game Rules
                            </Button>
                        </Box>
                    </>

                ) : (
                    <Box
                        sx={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // bgcolor: '#fffbe6',
                            px: 2,
                            textAlign: 'center',
                            width: "-webkit-fill-available"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#ff9800',
                                fontWeight: 'bold',
                                // maxWidth: 400
                            }}
                        >
                            Slow Internet Connectivity. Please try again later.
                        </Typography>
                    </Box>

                )}
            </Box>
        </>
    );
};

export default AuraGame;
