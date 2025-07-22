import { Box, Typography, Button, Divider, List, ListItem, ListItemText, Tab, Tabs, IconButton } from "@mui/material";
import { useState } from "react";
import video from "../assets/gameVideos/aviators.mp4"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from "react-router-dom";

const Extra = () => {
    const location = useLocation();
    const { data } = location?.state
    const bets = [
        { player: 'p****6', bet: 6343.55, multiplier: '1.33x', win: 8436.92 },
        { player: '2****e', bet: 5000.00, multiplier: '', win: 0 },
        { player: '3****6', bet: 3171.77, multiplier: '', win: 0 },
        { player: '4****e', bet: 3000.00, multiplier: '', win: 0 },
        { player: '5****a', bet: 2466.93, multiplier: '', win: 0 },
        { player: 'k****#', bet: 2138.03, multiplier: '', win: 0 },
        { player: '3****c', bet: 2114.51, multiplier: '', win: 0 },
        { player: '4****m', bet: 2114.51, multiplier: '', win: 0 },
        { player: '2****e', bet: 1500.00, multiplier: '', win: 0 },
        { player: '5****1', bet: 1498.38, multiplier: '', win: 0 },
        { player: '1****4', bet: 1496.62, multiplier: '', win: 0 },
    ];
    const [tabValue, setTabValue] = useState(0);
    const [amount, setAmount] = useState(5.00);

    const handleTabChange = (_, newValue) => setTabValue(newValue);
    const handleAmountChange = (delta) => {
        setAmount(prev => Math.max(0, (parseFloat(prev) + delta).toFixed(2)));
    };

    return (
        <>
            <Box sx={{ display: "flex", gap: 1, bgcolor: "black", height: "100vh", mb: 3, borderRadius: "30px" }}>
                <Box sx={{ width: "40%", bgcolor: "#111", p: 3, overflowY: 'auto', scrollbarWidth: "none", color: "#fff", borderRadius: "10px" }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleTabChange} aria-label="sidebar tabs" TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
                            sx={{
                                '& .MuiTab-root': {
                                    color: '#ccc',
                                    fontWeight: 500,
                                    textTransform: 'none'
                                },
                                '& .Mui-selected': {
                                    color: '#fff',
                                },
                            }}>
                            <Tab label="All Bets" />
                            <Tab label="Previous" />
                            <Tab label="Top" />
                        </Tabs>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        All Bets
                    </Typography>
                    <Typography variant="body2" color="#fff">
                        14,045.87 Total win INR
                    </Typography>
                    <Divider sx={{ my: 1, bgcolor: '#fff' }} />
                    <List>
                        {bets.map((bet, index) => (
                            <ListItem key={index} sx={{ py: 0.5 }}>
                                <ListItemText
                                    color="#fff"
                                    primary={bet.player}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="#fff">
                                                {bet.bet.toLocaleString()} INR
                                            </Typography>
                                            {' x' + bet.multiplier}
                                            {' '}
                                            <Typography component="span" variant="body2" color="#fff">
                                                {bet.win.toLocaleString()} INR
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box sx={{ width: "60%", height: "100vh", display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "30px" }}>
                        <video
                            src={data}
                            width="100%"
                            height="100%"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ borderRadius: 10 }}
                        />

                    </Box>
                    <Box
                        sx={{
                            bgcolor: "#111", // Dark background
                            width: '100%',
                            mx: "auto",
                            borderRadius: 2,
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: "#1a1a1a",
                                borderRadius: 2,
                                p: 2,
                            }}
                        >
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                textColor="inherit"
                                TabIndicatorProps={{ style: { display: "none" } }}
                                sx={{
                                    bgcolor: "#2a2a2a",
                                    borderRadius: "999px",
                                    mb: 2,
                                    "& .MuiTab-root": {
                                        color: "#aaa",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        flex: 1
                                    },
                                    "& .Mui-selected": {
                                        color: "#fff",
                                        bgcolor: "#111",
                                        borderRadius: "999px"
                                    }
                                }}
                            >
                                <Tab label="Bet" />
                                <Tab label="Auto" />
                            </Tabs>
                            <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={2}>
                                <IconButton size="small" sx={{ bgcolor: "#333", color: "#fff" }} onClick={() => handleAmountChange(-1)}>
                                    <RemoveIcon />
                                </IconButton>
                                <Typography sx={{ color: "#fff", width: 60, textAlign: 'center' }}>{amount.toFixed(2)}</Typography>
                                <IconButton size="small" sx={{ bgcolor: "#333", color: "#fff" }} onClick={() => handleAmountChange(1)}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                                {[100, 200, 500, 1000].map(val => (
                                    <Button
                                        key={val}
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#222",
                                            color: "#fff",
                                            fontWeight: 600,
                                            borderRadius: "999px",
                                            px: 2,
                                            minWidth: 60,
                                            textTransform: "none",
                                            "&:hover": { bgcolor: "#444" }
                                        }}
                                        onClick={() => setAmount(val)}
                                    >
                                        {val}
                                    </Button>
                                ))}
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: "limegreen",
                                    color: "#000",
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    textTransform: "none"
                                }}
                            >
                                Bet {amount.toFixed(2)} INR
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: "#1a1a1a",
                                borderRadius: 2,
                                p: 2,
                            }}
                        >
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                textColor="inherit"
                                TabIndicatorProps={{ style: { display: "none" } }}
                                sx={{
                                    bgcolor: "#2a2a2a",
                                    borderRadius: "999px",
                                    mb: 2,
                                    "& .MuiTab-root": {
                                        color: "#aaa",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        flex: 1
                                    },
                                    "& .Mui-selected": {
                                        color: "#fff",
                                        bgcolor: "#111",
                                        borderRadius: "999px"
                                    }
                                }}
                            >
                                <Tab label="Bet" />
                                <Tab label="Auto" />
                            </Tabs>
                            <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={2}>
                                <IconButton size="small" sx={{ bgcolor: "#333", color: "#fff" }} onClick={() => handleAmountChange(-1)}>
                                    <RemoveIcon />
                                </IconButton>
                                <Typography sx={{ color: "#fff", width: 60, textAlign: 'center' }}>{amount.toFixed(2)}</Typography>
                                <IconButton size="small" sx={{ bgcolor: "#333", color: "#fff" }} onClick={() => handleAmountChange(1)}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                                {[100, 200, 500, 1000].map(val => (
                                    <Button
                                        key={val}
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#222",
                                            color: "#fff",
                                            fontWeight: 600,
                                            borderRadius: "999px",
                                            px: 2,
                                            minWidth: 60,
                                            textTransform: "none",
                                            "&:hover": { bgcolor: "#444" }
                                        }}
                                        onClick={() => setAmount(val)}
                                    >
                                        {val}
                                    </Button>
                                ))}
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: "limegreen",
                                    color: "#000",
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    textTransform: "none"
                                }}
                            >
                                Bet {amount.toFixed(2)} INR
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default Extra;