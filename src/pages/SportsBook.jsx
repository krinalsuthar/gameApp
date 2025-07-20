import React, { useState } from 'react';
import {
    Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography, Chip,
    Divider, IconButton,
    Grid,
    Stack,
    Button,
    Paper,
    Tooltip
} from '@mui/material';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
    ExpandLess, ExpandMore, SportsSoccer, SportsCricket, SportsTennis, FlashOn,
    SportsEsports, Sports, SportsBasketball
} from '@mui/icons-material';
import {
    Menu as MenuIcon, ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArticleIcon from '@mui/icons-material/Article';
const leagues = [
    { name: 'Japan - J-League 1', icon: <SportsSoccer /> },
    { name: 'Korea - K-League 1', icon: <SportsSoccer /> },
    { name: 'USA - MLS', icon: <SportsSoccer /> },
];
const menuItems = [
    { label: 'My Bets', icon: <AttachMoneyIcon /> },
    { label: 'My Bonuses', icon: <CardGiftcardIcon /> },
    { label: 'My Offers', icon: <LocalOfferIcon /> },
    { label: 'Results', icon: <EmojiEventsIcon /> },
    { label: 'Announcements', icon: <CampaignIcon /> },
    { label: 'Betting Rules', icon: <ArticleIcon /> },
];
const sportsCategories = [
    { name: 'Cricket', count: 23, icon: <SportsCricket />, data: { international: ["Test Matches", "Twenty20 Intenational", "Twenty20 Intenational", "World Championship of League", "one day intenational women", "MAX60 Caribben", "CWI Rising star U19 Wonen"], "United Kingdome": ["Country Championship Division", "Country Championship Division"] } },
    { name: 'Soccer', count: 1755, icon: <SportsSoccer />, data: { Europe: ["Championship League", "UEFA Super", "Championships League Qulifying", "Europa League Qulifying", "Europa Conference League"], England: ["England - Premier League", "England Community Shield", "England - League One"] } },
    { name: 'Virtual Soccer', count: 148, icon: <SportsEsports />, data: { "Virtual Soccer": ["V-Soccer Championship League", "V-Soccer Italy Serie A-12 minis"] } },
    { name: 'Tennis', count: 193, icon: <SportsTennis />, data: { Australia: ["Australian Open Men", "Australian Open Women"], Canada: ["Challenge Granby", "Challenger Granby, Doubles", "ITF W75 Granby", "ITF W75 Granby, Doubles"] } },
    { name: 'Badminton', count: 2, icon: <Sports />, data: { Japan: ["Japan Open", "Japan Open Women", "Japan Open Doubles", "Japan Open Women Double", "Japan Open Mixed Doubles"] } },
    { name: 'Baseball', count: 3, icon: <SportsBasketball />, data: { "Top Baseball Leagues": ["MLB"], "United States": ["MLB", "Minor League Baseball"], "South Korea": ["South Korea KBO Leages"], Japan: ["Japan NPB League"] } },
    { name: 'Basketball', count: 3, icon: <SportsBasketball />, data: { "Top Basketball Leagues": ["NBA Summer League", "WNBA", "Philippines PBA Cup", "New Zealand - NBL", "Indonesia - IBL", "FIBA Asia Cup Women", "Australia - NBL1"], "United States": ["NBA", "NBA Summer League", "WNBA", "NCAAB", "WNBA A II-star Game"] } },
];

const SportsBook = () => {
    const [openSections, setOpenSections] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Cricket');
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const [openSectionsData, setOpenSectionsData] = useState({});
    const [openSubSections, setOpenSubSections] = useState({});

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
    const toggleSectionData = (name) =>
        setOpenSectionsData((prev) => ({ ...prev, [name]: !prev[name] }));

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const toggleSubSection = (sport, region) => {
        const key = `${sport}_${region}`;
        setOpenSubSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    const liveMatches = [
        {
            time: '09:00',
            league: 'Premier League',
            team1: 'Team A',
            score1: 120,
            team2: 'Team B',
            score2: 118,
            market: 'Match Odds',
            h: '1',
            a: '2',
            hOdds: 1.85,
            aOdds: 2.15,
        },
        {
            time: 'LIVE',
            league: 'Cricket League',
            team1: 'India',
            score1: 142,
            team2: 'Pakistan',
            score2: 139,
            market: 'Match Odds',
            h: '1',
            a: '2',
            hOdds: 1.9,
            aOdds: 1.95,
        },
        {
            time: 'LIVE',
            league: 'Cricket League',
            team1: 'India',
            score1: 142,
            team2: 'Pakistan',
            score2: 139,
            market: 'Match Odds',
            h: '1',
            a: '2',
            hOdds: 1.9,
            aOdds: 1.95,
        },
    ];

    const cricketMatches = [
        {
            team1: 'India',
            score1: 142,
            team2: 'Pakistan',
            score2: 139,
            odd1: 1.9,
            odd2: 1.95,
        },
        {
            team1: 'Australia U19',
            score1: 245,
            team2: 'England U19',
            score2: 240,
            odd1: 2.1,
            odd2: 1.75,
        },
    ];

    const categories = [
        'Live',
        'Upcoming',
        'Cricket',
        'Soccer',
        'Virtual Soccer',
        'Tennis',
        'Basketball',
        'Football',
    ];
    const toggleSection = (name) => {
        setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));
    };
    const LiveMatchCard = ({ match }) => (
        <Paper elevation={2} sx={{ p: 2, minWidth: 250, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography variant="caption" color="error">
                    {match.time}
                </Typography>
            </Box>
            <Typography variant="body2" fontWeight="bold">
                {match.league}
            </Typography>
            <Typography variant="body2" mt={1}>
                {match.team1} {match.score1}
            </Typography>
            <Typography variant="body2">
                {match.team2} {match.score2}
            </Typography>
            <Typography variant="body2" mt={1}>
                {match.market}
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={1}>
                <Box textAlign="center">
                    <Typography variant="caption">H</Typography>
                    <Typography fontWeight="bold">{match.hOdds}</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="caption">A</Typography>
                    <Typography fontWeight="bold">{match.aOdds}</Typography>
                </Box>
            </Box>
        </Paper>
    );

    const MatchSection = ({ title, matches }) => (
        <Box my={2}>
            {/* Section Header */}
            <Box
                sx={{
                    bgcolor: '#424b5c',
                    p: 1.2,
                    color: '#fff',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <SportsMmaIcon fontSize="small" />
                <Typography fontWeight="bold">{title}</Typography>
                <Typography sx={{ ml: 'auto' }}>{`(${matches.length})`}</Typography>
            </Box>

            {/* Match Rows */}
            {matches.map((match, idx) => (
                <Paper
                    key={idx}
                    sx={{
                        borderBottom: '1px solid #ccc',
                        p: 1,
                        borderRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {/* Star Icon */}
                    <IconButton size="small">
                        <StarBorderIcon fontSize="small" />
                    </IconButton>

                    {/* Time & Fighters */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 120 }}>
                        <Box display="flex" alignItems="center" gap={0.5}>
                            <AccessTimeIcon sx={{ fontSize: 14 }} />
                            <Typography fontSize={12}>{match.date} {match.time}</Typography>
                        </Box>
                        <Box mt={0.5}>
                            <Typography fontSize={14}>{match.team1}</Typography>
                            <Typography fontSize={14}>{match.team2}</Typography>
                        </Box>
                    </Box>

                    {/* Odds Column */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Box textAlign="center">
                            <Typography fontSize={10} color="textSecondary">FT Moneyline</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                    mt: 0.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.5,
                                        bgcolor: '#eee',
                                        borderRadius: 1,
                                        minWidth: 100,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography fontSize={13}>{match.team1}</Typography>
                                    <Typography fontWeight="bold">{match.odd1}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.5,
                                        bgcolor: '#eee',
                                        borderRadius: 1,
                                        minWidth: 100,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography fontSize={13}>{match.team2}</Typography>
                                    <Typography fontWeight="bold">{match.odd2}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
    return (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                width: "100%",
                flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" },
                bgcolor: "pink",
            }}
        >
            <Box sx={{
                width: isDrawerOpen ? "25%" : "6%",
                height: "100vh", overflowY: "scroll", scrollbarWidth: "none"
            }}>
                <Box >
                    <Box
                        sx={{
                            height: '100vh',
                            overflowY: 'auto',
                            transition: 'width 0.3s ease',
                            bgcolor: '#1e1e2f',
                            color: 'white',
                            p: 2,
                        }}
                    >

                        <IconButton
                            onClick={toggleDrawer}
                            sx={{
                                zIndex: 10,
                                bgcolor: '#1e1e2f',
                                color: 'white',
                                border: '1px solid gray',
                            }}
                        >
                            {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                        </IconButton>
                        {isDrawerOpen && (
                            <Typography variant="h6" gutterBottom sx={{ color: 'orange' }}>
                                Featured Leagues
                            </Typography>
                        )}
                        <List dense>
                            {leagues.map((league, index) => (
                                <Tooltip title={!isDrawerOpen ? league.name : ''} placement="right" key={index}>
                                    <ListItem sx={{ bgcolor: '#2e2e3e', borderRadius: 1, mb: 1 }}>
                                        <ListItemIcon sx={{ color: 'white' }}>{league.icon}</ListItemIcon>
                                        {isDrawerOpen && <ListItemText primary={league.name} />}
                                    </ListItem>
                                </Tooltip>
                            ))}
                        </List>

                        <Divider sx={{ my: 2, borderColor: 'gray' }} />
                        <List dense>
                            {sportsCategories.map((sport, index) => (
                                <React.Fragment key={index}>
                                    {/* Top-level: Sport */}
                                    <Tooltip title={!isDrawerOpen ? sport.name : ''} placement="right">
                                        <ListItem button onClick={() => toggleSectionData(sport.name)}>
                                            <ListItemIcon sx={{ color: 'white' }}>{sport.icon}</ListItemIcon>
                                            {isDrawerOpen && (
                                                <>
                                                    <ListItemText primary={`${sport.name} (${sport.count})`} />
                                                    <Chip label="LIVE" color="error" size="small" sx={{ ml: 1 }} />
                                                    {openSectionsData[sport.name] ? <ExpandLess /> : <ExpandMore />}
                                                </>
                                            )}
                                        </ListItem>
                                    </Tooltip>

                                    {/* Collapse: Sport Content */}
                                    {isDrawerOpen && (
                                        <Collapse in={openSectionsData[sport.name]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding sx={{ pl: 4 }}>
                                                {Object.entries(sport.data).map(([region, leagues]) => {
                                                    const subKey = `${sport.name}_${region}`;
                                                    return (
                                                        <React.Fragment key={subKey}>
                                                            {/* Region/Category */}
                                                            <ListItem button onClick={() => toggleSubSection(sport.name, region)} sx={{ pl: 2 }}>
                                                                <ListItemText primary={region} sx={{ color: 'orange', fontWeight: 'bold' }} />
                                                                {openSubSections[subKey] ? <ExpandLess /> : <ExpandMore />}
                                                            </ListItem>

                                                            {/* Collapse: League List */}
                                                            <Collapse in={openSubSections[subKey]} timeout="auto" unmountOnExit>
                                                                <List component="div" disablePadding sx={{ pl: 3 }}>
                                                                    {leagues.map((league, i) => (
                                                                        <ListItem key={i} sx={{ pl: 2 }}>
                                                                            <ListItemText primary={league} sx={{ color: 'gray', fontSize: '0.875rem' }} />
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            </Collapse>
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    )}
                                </React.Fragment>
                            ))}
                        </List>

                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: isDrawerOpen ? "50%" : "75%", height: "100vh", overflowY: "scroll", scrollbarWidth: "none"
            }}>
                <Box p={2} bgcolor="#f5f5f5">
                    {/* Top Match Cards */}
                    <Grid container spacing={1} sx={{ overflowX: 'auto', flexWrap: 'nowrap', scrollbarWidth: "none" }}>
                        {liveMatches.map((match, i) => (
                            <Box>
                                <Grid item key={i}>
                                    <LiveMatchCard match={match} />
                                </Grid>
                            </Box>
                        ))}
                    </Grid>

                    {/* Category Filter Chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2, }}>
                        {categories.map((cat, i) => (
                            <Chip
                                key={i}
                                label={cat}
                                clickable
                                color={selectedCategory === cat ? 'warning' : 'default'}
                                onClick={() => handleCategorySelect(cat)}
                            />
                        ))}
                    </Box>

                    {/* League / Time Tabs */}
                    <Box display="flex" gap={2} mt={1}>
                        <Chip label="League" color="warning" clickable />
                        <Chip label="Time" variant="outlined" clickable />
                    </Box>

                    {/* Match Sections */}
                    <MatchSection
                        title="Twenty20 International (1)"
                        matches={cricketMatches.slice(0, 1)}
                    />
                    <MatchSection
                        title="One Day Internationals U19 (1)"
                        matches={cricketMatches.slice(1)}
                    />
                </Box>
            </Box>
            <Box sx={{
                width: isDrawerOpen ? "25%" : "25%", height: "100vh", overflowY: "scroll", scrollbarWidth: "none"
            }}>
                <Box sx={{ bgcolor: '#22252e', color: 'white', minHeight: '100vh', p: 2 }}>
                    <Stack direction="row" spacing={1} justifyContent="center" mb={4}>
                        <IconButton sx={{ border: '1px solid gray', color: 'white' }}>
                            <ArticleIcon />
                        </IconButton>
                        <IconButton sx={{ border: '1px solid gray', color: 'white' }}>
                            <AttachMoneyIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            startIcon={<AccountCircleIcon />}
                            sx={{
                                bgcolor: '#ff7b00',
                                color: 'white',
                                px: 4,
                                borderRadius: 5,
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#e86c00' },
                            }}
                        >
                            My Account
                        </Button>
                        <IconButton sx={{ border: '1px solid gray', color: 'white' }}>
                            <SettingsIcon />
                        </IconButton>
                    </Stack>
                    <Grid container spacing={4} justifyContent="center">
                        {menuItems.map((item, index) => (
                            <Grid item xs={4} sm={4} md={2} key={index} textAlign="center">
                                <Box
                                    sx={{
                                        border: '1px solid orange',
                                        borderRadius: '50%',
                                        width: 64,
                                        height: 64,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 1,
                                        color: 'orange',
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography variant="body2">{item.label}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box >

    )
}
export default SportsBook