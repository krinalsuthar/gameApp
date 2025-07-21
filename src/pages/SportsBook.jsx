import React, { useState } from 'react';
import {
    Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography, Chip,
    Divider, IconButton, Grid, Stack, Button, Paper, Tooltip
} from '@mui/material';
import {
    ExpandLess, ExpandMore, SportsSoccer, SportsCricket, SportsTennis, Sports,
    SportsBasketball, SportsEsports, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon,
    Settings as SettingsIcon, AccountCircle as AccountCircleIcon, AttachMoney as AttachMoneyIcon,
    CardGiftcard as CardGiftcardIcon, LocalOffer as LocalOfferIcon, EmojiEvents as EmojiEventsIcon,
    Campaign as CampaignIcon, Article as ArticleIcon, StarBorder as StarBorderIcon, AccessTime as AccessTimeIcon
} from '@mui/icons-material';

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
    {
        name: "Cricket",
        count: 8,
        icon: <SportsCricket />,
        data: {
            international: [
                "Test Matches",
                "Twenty20 International",
                "World Championship of League",
                "One Day International Women",
                "MAX60 Caribbean",
                "CWI Rising Star U19 Women"
            ],
            "United Kingdom": ["County Championship Division"]
        },
        matches: {
            international: {
                "Test Matches": [
                    {
                        date: "2025-07-21",
                        time: "08:00",
                        team1: "England [W]",
                        team2: "India [W]",
                        odd1: 1.58,
                        odd2: 2.25,
                        isLive: true,
                        tag: "live"
                    },
                    {
                        date: "2025-07-25",
                        time: "14:00",
                        team1: "Australia",
                        team2: "South Africa",
                        odd1: 1.75,
                        odd2: 2.05,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Twenty20 International": [
                    {
                        date: "2025-07-21",
                        time: "09:00",
                        team1: "Pakistan",
                        team2: "Sri Lanka",
                        odd1: 1.62,
                        odd2: 2.35,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "World Championship of League": [
                    {
                        date: "2025-08-01",
                        time: "20:00",
                        team1: "Bangladesh",
                        team2: "West Indies",
                        odd1: 2.20,
                        odd2: 1.65,
                        isLive: false,
                        tag: ""
                    }
                ],
                "One Day International Women": [
                    {
                        date: "2025-07-28",
                        time: "16:00",
                        team1: "New Zealand [W]",
                        team2: "India [W]",
                        odd1: 2.00,
                        odd2: 1.85,
                        isLive: false,
                        tag: ""
                    }
                ],
                "MAX60 Caribbean": [
                    {
                        date: "2025-07-29",
                        time: "19:30",
                        team1: "Jamaica Tallawahs",
                        team2: "St Lucia Kings",
                        odd1: 2.10,
                        odd2: 1.90,
                        isLive: false,
                        tag: ""
                    }
                ],
                "CWI Rising Star U19 Women": [
                    {
                        date: "2025-07-30",
                        time: "13:00",
                        team1: "Barbados U19",
                        team2: "Trinidad U19",
                        odd1: 1.70,
                        odd2: 2.30,
                        isLive: false,
                        tag: ""
                    }
                ]
            },
            "United Kingdom": {
                "County Championship Division": [
                    {
                        date: "2025-07-26",
                        time: "11:00",
                        team1: "Yorkshire",
                        team2: "Surrey",
                        odd1: 2.40,
                        odd2: 1.60,
                        isLive: false,
                        tag: ""
                    },
                    {
                        date: "2025-07-27",
                        time: "15:00",
                        team1: "Kent",
                        team2: "Middlesex",
                        odd1: 1.88,
                        odd2: 2.00,
                        isLive: false,
                        tag: ""
                    }
                ]
            }
        }
    },
    {
        name: "Soccer",
        count: 8,
        icon: <SportsSoccer />,
        data: {
            Europe: [
                "Championship League",
                "UEFA Super",
                "Championships League Qualifying",
                "Europa League Qualifying",
                "Europa Conference League"
            ],
            England: ["England - Premier League", "England Community Shield", "England - League One"]
        },
        matches: {
            Europe: {
                "Championship League": [
                    {
                        date: "2025-07-21",
                        time: "08:30",
                        team1: "Real Madrid",
                        team2: "Bayern Munich",
                        odd1: 2.10,
                        odd2: 1.80,
                        isLive: true,
                        tag: "live"
                    },
                    {
                        date: "2025-07-23",
                        time: "19:00",
                        team1: "Manchester City",
                        team2: "Paris SG",
                        odd1: 1.95,
                        odd2: 1.90,
                        isLive: false,
                        tag: ""
                    }
                ],
                "UEFA Super": [
                    {
                        date: "2025-08-01",
                        time: "20:30",
                        team1: "Barcelona",
                        team2: "Juventus",
                        odd1: 2.00,
                        odd2: 1.85,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Championships League Qualifying": [
                    {
                        date: "2025-07-21",
                        time: "09:00",
                        team1: "Ajax",
                        team2: "Celtic",
                        odd1: 1.70,
                        odd2: 2.20,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Europa League Qualifying": [
                    {
                        date: "2025-07-25",
                        time: "19:00",
                        team1: "Anderlecht",
                        team2: "Fenerbahce",
                        odd1: 2.15,
                        odd2: 1.75,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Europa Conference League": [
                    {
                        date: "2025-07-27",
                        time: "17:00",
                        team1: "Fiorentina",
                        team2: "Basel",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: false,
                        tag: ""
                    }
                ]
            },
            England: {
                "England - Premier League": [
                    {
                        date: "2025-07-21",
                        time: "07:00",
                        team1: "Arsenal",
                        team2: "Chelsea",
                        odd1: 1.90,
                        odd2: 1.95,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "England Community Shield": [
                    {
                        date: "2025-08-02",
                        time: "14:00",
                        team1: "Manchester United",
                        team2: "Liverpool",
                        odd1: 2.05,
                        odd2: 1.85,
                        isLive: false,
                        tag: ""
                    }
                ],
                "England - League One": [
                    {
                        date: "2025-07-22",
                        time: "19:45",
                        team1: "Birmingham City",
                        team2: "Wigan Athletic",
                        odd1: 1.65,
                        odd2: 2.25,
                        isLive: false,
                        tag: ""
                    }
                ]
            }
        }
    },
    {
        name: "Virtual Soccer",
        count: 3,
        icon: <SportsEsports />,
        data: {
            "Virtual Soccer": ["V-Soccer Championship League", "V-Soccer Italy Serie A-12 mins"]
        },
        matches: {
            "Virtual Soccer": {
                "V-Soccer Championship League": [
                    {
                        date: "2025-07-21",
                        time: "08:00",
                        team1: "V-Real Madrid",
                        team2: "V-Bayern Munich",
                        odd1: 1.85,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    },
                    {
                        date: "2025-07-21",
                        time: "10:00",
                        team1: "V-Manchester City",
                        team2: "V-Barcelona",
                        odd1: 1.90,
                        odd2: 1.95,
                        isLive: false,
                        tag: ""
                    }
                ],
                "V-Soccer Italy Serie A-12 mins": [
                    {
                        date: "2025-07-21",
                        time: "09:30",
                        team1: "V-Juventus",
                        team2: "V-AC Milan",
                        odd1: 2.00,
                        odd2: 1.85,
                        isLive: true,
                        tag: "live"
                    }
                ]
            }
        }
    },
    {
        name: "Tennis",
        count: 6,
        icon: <SportsTennis />,
        data: {
            Australia: ["Australian Open Men", "Australian Open Women"],
            Canada: ["Challenge Granby", "Challenger Granby, Doubles", "ITF W75 Granby", "ITF W75 Granby, Doubles"]
        },
        matches: {
            Australia: {
                "Australian Open Men": [
                    {
                        date: "2025-07-21",
                        time: "08:30",
                        team1: "Novak Djokovic",
                        team2: "Carlos Alcaraz",
                        odd1: 1.75,
                        odd2: 2.10,
                        isLive: true,
                        tag: "live"
                    },
                    {
                        date: "2025-07-22",
                        time: "13:00",
                        team1: "Rafael Nadal",
                        team2: "Daniil Medvedev",
                        odd1: 1.90,
                        odd2: 1.95,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Australian Open Women": [
                    {
                        date: "2025-07-21",
                        time: "09:00",
                        team1: "Iga Swiatek",
                        team2: "Aryna Sabalenka",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    }
                ]
            },
            Canada: {
                "Challenge Granby": [
                    {
                        date: "2025-07-21",
                        time: "07:30",
                        team1: "Denis Shapovalov",
                        team2: "Felix Auger-Aliassime",
                        odd1: 1.85,
                        odd2: 1.95,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Challenger Granby, Doubles": [
                    {
                        date: "2025-07-23",
                        time: "15:00",
                        team1: "Murray/Bopanna",
                        team2: "Skupski/Koolhof",
                        odd1: 1.90,
                        odd2: 1.90,
                        isLive: false,
                        tag: ""
                    }
                ],
                "ITF W75 Granby": [
                    {
                        date: "2025-07-24",
                        time: "12:00",
                        team1: "Bianca Andreescu",
                        team2: "Leylah Fernandez",
                        odd1: 1.70,
                        odd2: 2.20,
                        isLive: false,
                        tag: ""
                    }
                ],
                "ITF W75 Granby, Doubles": []
            }
        }
    },
    {
        name: "Badminton",
        count: 5,
        icon: <Sports />,
        data: {
            Japan: [
                "Japan Open",
                "Japan Open Women",
                "Japan Open Doubles",
                "Japan Open Women Double",
                "Japan Open Mixed Doubles"
            ]
        },
        matches: {
            Japan: {
                "Japan Open": [
                    {
                        date: "2025-07-21",
                        time: "08:00",
                        team1: "Viktor Axelsen",
                        team2: "Anthony Sinisuka Ginting",
                        odd1: 1.65,
                        odd2: 2.25,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Japan Open Women": [
                    {
                        date: "2025-07-21",
                        time: "10:00",
                        team1: "Akane Yamaguchi",
                        team2: "Tai Tzu Ying",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Japan Open Doubles": [
                    {
                        date: "2025-07-22",
                        time: "11:00",
                        team1: "Fajar/Rian",
                        team2: "Chia/Soh",
                        odd1: 1.90,
                        odd2: 1.85,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Japan Open Women Double": [
                    {
                        date: "2025-07-23",
                        time: "12:00",
                        team1: "Chen/Jia",
                        team2: "Kim/Kong",
                        odd1: 1.75,
                        odd2: 2.10,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Japan Open Mixed Doubles": [
                    {
                        date: "2025-07-24",
                        time: "13:00",
                        team1: "Zheng/Huang",
                        team2: "Watanabe/Higashino",
                        odd1: 1.85,
                        odd2: 1.95,
                        isLive: false,
                        tag: ""
                    }
                ]
            }
        }
    },
    {
        name: "Baseball",
        count: 6,
        icon: <SportsBasketball />,
        data: {
            "Top Baseball Leagues": ["MLB"],
            "United States": ["MLB", "Minor League Baseball"],
            "South Korea": ["South Korea KBO League"],
            Japan: ["Japan NPB League"]
        },
        matches: {
            "Top Baseball Leagues": {
                "MLB": [
                    {
                        date: "2025-07-21",
                        time: "08:00",
                        team1: "New York Yankees",
                        team2: "Boston Red Sox",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    }
                ]
            },
            "United States": {
                "MLB": [
                    {
                        date: "2025-07-21",
                        time: "09:30",
                        team1: "Los Angeles Dodgers",
                        team2: "San Francisco Giants",
                        odd1: 1.75,
                        odd2: 2.05,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Minor League Baseball": [
                    {
                        date: "2025-07-22",
                        time: "18:00",
                        team1: "Durham Bulls",
                        team2: "Scranton RailRiders",
                        odd1: 1.90,
                        odd2: 1.90,
                        isLive: false,
                        tag: ""
                    }
                ]
            },
            "South Korea": {
                "South Korea KBO League": [
                    {
                        date: "2025-07-23",
                        time: "18:30",
                        team1: "Samsung Lions",
                        team2: "LG Twins",
                        odd1: 1.85,
                        odd2: 1.95,
                        isLive: false,
                        tag: ""
                    },
                    {
                        date: "2025-07-24",
                        time: "18:30",
                        team1: "Doosan Bears",
                        team2: "Kia Tigers",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: false,
                        tag: ""
                    }
                ]
            },
            Japan: {
                "Japan NPB League": [
                    {
                        date: "2025-07-21",
                        time: "08:30",
                        team1: "Yomiuri Giants",
                        team2: "Hanshin Tigers",
                        odd1: 1.95,
                        odd2: 1.85,
                        isLive: true,
                        tag: "live"
                    }
                ]
            }
        }
    },
    {
        name: "Basketball",
        count: 8,
        icon: <SportsBasketball />,
        data: {
            "Top Basketball Leagues": [
                "NBA Summer League",
                "WNBA",
                "Philippines PBA Cup",
                "New Zealand - NBL",
                "Indonesia - IBL",
                "FIBA Asia Cup Women",
                "Australia - NBL1"
            ],
            "United States": ["NBA", "NBA Summer League", "WNBA", "NCAAB", "WNBA All-Star Game"]
        },
        matches: {
            "Top Basketball Leagues": {
                "NBA Summer League": [
                    {
                        date: "2025-07-21",
                        time: "08:00",
                        team1: "Lakers Summer",
                        team2: "Celtics Summer",
                        odd1: 1.90,
                        odd2: 1.95,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "WNBA": [
                    {
                        date: "2025-07-21",
                        time: "09:00",
                        team1: "Las Vegas Aces",
                        team2: "New York Liberty",
                        odd1: 1.85,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "Philippines PBA Cup": [
                    {
                        date: "2025-07-22",
                        time: "17:00",
                        team1: "San Miguel Beermen",
                        team2: "Barangay Ginebra",
                        odd1: 1.80,
                        odd2: 2.05,
                        isLive: false,
                        tag: ""
                    }
                ],
                "New Zealand - NBL": [
                    {
                        date: "2025-07-23",
                        time: "18:00",
                        team1: "Auckland Tuatara",
                        team2: "Wellington Saints",
                        odd1: 1.75,
                        odd2: 2.10,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Indonesia - IBL": [
                    {
                        date: "2025-07-24",
                        time: "19:00",
                        team1: "Pelita Jaya",
                        team2: "Satria Muda",
                        odd1: 1.90,
                        odd2: 1.90,
                        isLive: false,
                        tag: ""
                    }
                ],
                "FIBA Asia Cup Women": [
                    {
                        date: "2025-07-25",
                        time: "14:00",
                        team1: "China [W]",
                        team2: "Japan [W]",
                        odd1: 1.65,
                        odd2: 2.25,
                        isLive: false,
                        tag: ""
                    }
                ],
                "Australia - NBL1": [
                    {
                        date: "2025-07-21",
                        time: "08:30",
                        team1: "Perth Wildcats",
                        team2: "Sydney Kings",
                        odd1: 1.80,
                        odd2: 2.00,
                        isLive: true,
                        tag: "live"
                    }
                ]
            },
            "United States": {
                "NBA": [
                    {
                        date: "2025-07-21",
                        time: "09:30",
                        team1: "Golden State Warriors",
                        team2: "Milwaukee Bucks",
                        odd1: 1.95,
                        odd2: 1.85,
                        isLive: true,
                        tag: "live"
                    }
                ],
                "NBA Summer League": [],
                "WNBA": [],
                "NCAAB": [],
                "WNBA All-Star Game": []
            }
        }
    }
];

const SportsBook = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const [openSectionsData, setOpenSectionsData] = useState({});
    const [openSubSections, setOpenSubSections] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Cricket');
    const [selectedTournament, setSelectedTournament] = useState(null);

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    const toggleSectionData = (sport) => {
        setOpenSectionsData((prev) => ({ ...prev, [sport]: !prev[sport] }));
    };

    const toggleSubSection = (sport, region) => {
        const key = `${sport}_${region}`;
        setOpenSubSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedTournament(null);
    };

    const handleTournamentSelect = (sport, region, tournament) => {
        setSelectedCategory(sport);
        setSelectedTournament({ region, tournament });
    };

    const getMatches = () => {
        const sport = sportsCategories.find((s) => s.name === selectedCategory);
        if (selectedCategory === 'Live') {
            return sportsCategories
                .flatMap((s) =>
                    Object.values(s.matches).flatMap((region) =>
                        Object.values(region).flatMap((matches) =>
                            matches.filter((m) => m.tag == "live")
                        )
                    )
                );
        }

        if (selectedCategory === 'Upcoming') {
            return sportsCategories
                .flatMap((s) =>
                    Object.values(s.matches).flatMap((region) =>
                        Object.values(region).flatMap((matches) =>
                            matches.filter((m) => m.tag !== "live")
                        )
                    )
                );
        }

        if (selectedTournament) {
            const { region, tournament } = selectedTournament;
            return sport.matches[region]?.[tournament] || [];
        }

        return Object.values(sport.matches)
            .flatMap((region) => Object.values(region).flat());
    };

    const LiveMatchCard = ({ match }) => (
        <Paper elevation={2} sx={{ p: 2, width: 250, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography variant="caption" color="error">
                    {match.tag === "live" ? 'LIVE' : `${match.date} ${match.time}`}
                </Typography>
            </Box>
            <Typography variant="body2" fontWeight="bold">
                {match.league || 'Match'}
            </Typography>
            <Typography variant="body2" mt={1}>
                {match.team1} {match.score1 || ''}
            </Typography>
            <Typography variant="body2">
                {match.team2} {match.score2 || ''}
            </Typography>
            <Typography variant="body2" mt={1}>
                Match Odds
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={1}>
                <Box textAlign="center">
                    <Typography variant="caption">H</Typography>
                    <Typography fontWeight="bold">{match.odd1}</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="caption">A</Typography>
                    <Typography fontWeight="bold">{match.odd2}</Typography>
                </Box>
            </Box>
        </Paper>
    );

    const MatchSection = ({ title, matches, icon }) => (
        <Box my={2}>
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
                {icon}
                <Typography fontWeight="bold">{title}</Typography>
                <Typography sx={{ ml: 'auto' }}>{`(${matches.length})`}</Typography>
            </Box>
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
                    <IconButton size="small">
                        <StarBorderIcon fontSize="small" />
                    </IconButton>
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
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                width: '100vw',
                height: "100vh",
                overflowY: "hidden",
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    height: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                    borderRadius: '4px',
                },
                WebkitOverflowScrolling: 'touch',
            }}
        >
            <Box sx={{
                width: isDrawerOpen ? { lg: '25vw', md: '30vw', sm: '40vw', xs: '80vw' } : { lg: '6vw', md: '10vw', sm: '15vw', xs: '20vw' },
                height: '100vh',
                overflowY: 'scroll',
                flexShrink: 0,
                bgcolor: '#1e1e2f',
                color: 'white',
                pt: 2,
                scrollbarWidth: "none"
            }}>
                < Box
                    sx={{
                        height: '100vh',
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
                        {leagues?.map((league, index) => (
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
                                <Tooltip title={!isDrawerOpen ? sport.name : ''} placement="right">
                                    <ListItem button onClick={() => {
                                        handleCategorySelect(sport.name);
                                        toggleSectionData(sport.name);
                                    }}>
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
                                {isDrawerOpen && (
                                    <Collapse in={openSectionsData[sport.name]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ pl: 4 }}>
                                            {Object.entries(sport.data).map(([region, tournaments]) => {
                                                const subKey = `${sport.name}_${region}`;
                                                return (
                                                    <React.Fragment key={subKey}>
                                                        <ListItem button onClick={() => toggleSubSection(sport.name, region)} sx={{ pl: 2 }}>
                                                            <ListItemText primary={region} sx={{ color: 'orange', fontWeight: 'bold' }} />
                                                            {openSubSections[subKey] ? <ExpandLess /> : <ExpandMore />}
                                                        </ListItem>
                                                        <Collapse in={openSubSections[subKey]} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding sx={{ pl: 3 }}>
                                                                {tournaments.map((tournament, i) => (
                                                                    <ListItem
                                                                        key={i}
                                                                        button
                                                                        onClick={() => handleTournamentSelect(sport.name, region, tournament)}
                                                                        sx={{ pl: 2 }}
                                                                    >
                                                                        <ListItemText primary={tournament} sx={{ color: 'gray', fontSize: '0.875rem' }} />
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
            </Box >
            <Box sx={{
                width: isDrawerOpen ? { lg: '48vw', md: '60vw', sm: '70vw', xs: '130vw' } : { lg: '67vw', md: '75vw', sm: '90vw', xs: '120vw' },
                height: '100vh',
                overflowY: 'scroll',
                flexShrink: 0,
                scrollbarWidth: "none"
            }}>
                <Box p={2} bgcolor="#f5f5f5">
                    <Grid container spacing={1} sx={{ overflowY: 'auto', flexWrap: 'nowrap', scrollbarWidth: 'none', }}>
                        {sportsCategories
                            .flatMap((s) =>
                                Object.values(s.matches).flatMap((region) =>
                                    Object.values(region).flatMap((matches) =>
                                        matches.filter((m) => m.tag === "live")
                                    )
                                )
                            )
                            .map((match, i) => (
                                <Box item key={i} pt={2} >
                                    <LiveMatchCard match={match} />
                                </Box>
                            ))}
                    </Grid>
                    <Box sx={{ display: 'flex', gap: 1, my: 2, flexWrap: "wrap" }}>
                        {['Live', 'Upcoming', ...sportsCategories.map((s) => s.name)].map((cat, i) => (
                            <Chip
                                key={i}
                                label={cat}
                                clickable
                                color={selectedCategory === cat ? 'warning' : 'default'}
                                onClick={() => handleCategorySelect(cat)}
                            />
                        ))}
                    </Box>
                    <Box display="flex" gap={2} mt={1}>
                        <Chip label="League" color="warning" clickable />
                        <Chip label="Time" variant="outlined" clickable />
                    </Box>
                    {selectedCategory === 'Live' || selectedCategory === 'Upcoming' ? (
                        <MatchSection
                            title={selectedCategory}
                            matches={getMatches()}
                            icon={selectedCategory === 'Live' ? <Sports /> : <AccessTimeIcon />}
                        />
                    ) : (
                        selectedTournament ? (
                            <MatchSection
                                title={`${selectedTournament.tournament} (${sportsCategories.find((s) => s.name === selectedCategory).matches[selectedTournament.region]?.[selectedTournament.tournament]?.length || 0
                                    })`}
                                matches={getMatches()}
                                icon={sportsCategories.find((s) => s.name === selectedCategory).icon}
                            />
                        ) : (
                            sportsCategories
                                .find((s) => s.name === selectedCategory)
                                ?.data &&
                            Object.entries(sportsCategories.find((s) => s.name === selectedCategory).data).map(([region, tournaments]) =>
                                tournaments.map((tournament, i) => (
                                    <MatchSection
                                        key={`${region}_${tournament}`}
                                        title={`${tournament} (${sportsCategories.find((s) => s.name === selectedCategory).matches[region]?.[tournament]?.length || 0
                                            })`}
                                        matches={sportsCategories.find((s) => s.name === selectedCategory).matches[region]?.[tournament] || []}
                                        icon={sportsCategories.find((s) => s.name === selectedCategory).icon}
                                    />
                                ))
                            )
                        )
                    )}
                </Box>
            </Box>
            <Box sx={{
                width: isDrawerOpen ? { lg: '25vw', md: '30vw', sm: '35vw', xs: '70vw' } : { lg: '25vw', md: '30vw', sm: '50vw', xs: '80vw' },
                height: '100vh',
                flexShrink: 0,
                bgcolor: '#22252e',
                color: 'white',
                p: 2,
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
                            <Grid item xs={4} sm={4} md={2} key={index} textAlign="center" >
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
    );
};

export default SportsBook;