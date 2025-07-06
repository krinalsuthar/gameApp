import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    TextField,
    Collapse,
    Divider,
    Typography,
    Grid,
    CardContent,
    Card,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from '../features/drawer/drawerSlice';
import {
    drawerData,
    providersData,
    categoriesData,
    startingData
} from '../data/drawerData';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { CricketIcon } from '../assets/SVGs/allSVGs';
import { useMediaQuery, useTheme } from "@mui/material";


const DesktopComponent = () => {
    const open = useSelector((state) => state.drawer.open);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [openSports, setOpenSports] = useState({});
    const [openLeagues, setOpenLeagues] = useState({});

    const handleClose = () => dispatch(closeDrawer())

    const handleSportClick = (sport) => {
        setOpenSports((prev) => ({
            ...prev,
            [sport]: !prev[sport],
        }));
    };

    const handleLeagueClick = (sport, league) => {
        setOpenLeagues((prev) => ({
            ...prev,
            [`${sport}-${league}`]: !prev[`${sport}-${league}`],
        }));
    };
    const [openCategories, setOpenCategories] = useState(true);

    const handleToggleCategories = () => {
        setOpenCategories((prev) => !prev);
    };
    const [openProviders, setOpenProviders] = useState(true);

    const handleToggleProviders = () => {
        setOpenProviders((prev) => !prev);
    };
    const [opeSportsEntire, setOpenSportsEntire] = useState(true);

    const handleToggleSportsEntire = () => {
        setOpenSportsEntire((prev) => !prev);
    };
    const filteredSports = drawerData.sports.map((sport) => ({
        ...sport,
        leagues: sport.leagues.map((league) => ({
            ...league,
            matches: league.matches.filter((match) =>
                match.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        })).filter((league) => league.matches.length > 0),
    })).filter((sport) => sport.leagues.length > 0);

    const [language, setLanguage] = React.useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={handleClose}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    top: '50px',
                    width: 350,
                    height: 'calc(100vh - 50px)',
                    boxSizing: 'border-box',
                    zIndex: 1200,
                    overflowX: "hidden",
                },

            }}
        >
            <Box
                sx={{ width: 350, overflowY: 'auto', scrollbarWidth: "none", overflowX: "hidden", bgcolor: "#f5f5f5de", pb: "50px" }}
                role="presentation"
                onKeyDown={handleClose}
            >
                <Grid container spacing={1} sx={{ padding: 2, bgcolor: "#f5f5f5de" }}>
                    {["Sport", "Casino", "Promotions", "Refer & Earn"]?.map((item) => (
                        <Grid item lg={6} md={6} key={item} sx={{ padding: "0px" }}>
                            <Card
                                sx={{
                                    bgcolor: "#43727a",
                                    cursor: "pointer",
                                    padding: "0px",
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    minWidth: 150,
                                    width: '100%',
                                    '&:hover': {
                                        boxShadow: 3,
                                    },
                                }}
                            >
                                <CardContent sx={{
                                    padding: "5px !important"
                                }}>
                                    <Typography variant="h7" component="div" sx={{ textAlign: 'center', color: 'white' }}>
                                        {item}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ bgcolor: '#f5f5f5de', p: 1 }}>
                    <List>
                        {startingData?.starting?.items?.map((item) => (
                            <ListItemButton
                                key={item.segment}
                                component={Link}
                                to={`/provider/${item.segment}`}
                                onClick={handleClose}
                                sx={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    margin: "5px 0px",
                                    borderRadius: "5px",
                                    padding: "6px 12px",
                                    bgcolor: "white",
                                    cursor: "pointer",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <item.icon sx={{ fontSize: 20, color: "inherit" }} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500, lineHeight: 1 }}>
                                        {item.title}
                                    </Typography>
                                </Box>

                                <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#92928e" }}>
                                    {item.count}
                                </Typography>
                            </ListItemButton>

                        ))}
                    </List>
                </Box>

                <Box sx={{ bgcolor: '#f5f5f5de', p: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleToggleSportsEntire}
                    >
                        <Typography sx={{ mb: 1, fontSize: "15px", fontWeight: 500 }}>SPORTS</Typography>
                        {opeSportsEntire ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                    <Collapse in={opeSportsEntire} timeout="auto" unmountOnExit>
                        <List>

                            {filteredSports.map((sport) => (
                                <React.Fragment key={sport.segment}>
                                    <ListItemButton onClick={() => handleSportClick(sport.segment)} sx={{ justifyContent: "space-between", margin: "5px 0px", borderRadius: "5px", padding: "3px 10px", bgcolor: "white" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "7px", cursor: "pointer" }}>
                                            <sport.icon sx={{ color: 'inherit' }} />
                                            <Box>
                                                <ListItemText
                                                    primary={`${sport.sport}`}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography
                                                sx={{ fontSize: "12px", fontWeight: 600, color: "#92928e" }}
                                            >
                                                {`${sport.leagues.reduce((acc, league) => acc + league.count, 0)}`}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                {openSports[sport.segment] ? <ExpandLess /> : <ExpandMore />}
                                            </Box>
                                        </Box>
                                    </ListItemButton>
                                    <Collapse
                                        in={openSports[sport.segment]}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {sport.leagues.map((league) => (
                                                <React.Fragment key={league.segment}>
                                                    <ListItemButton
                                                        sx={{
                                                            justifyContent: "space-between",
                                                            margin: "5px 0px",
                                                            borderRadius: "5px",
                                                            padding: "3px 10px",
                                                            bgcolor: "white",
                                                        }}
                                                        onClick={() => handleLeagueClick(sport.segment, league.segment)}
                                                    >
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                                            <league.icon sx={{ color: "inherit" }} />
                                                            <Box>
                                                                <ListItemText primary={`${league.title}`} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#92928e" }}>
                                                                {league.count}
                                                            </Typography>
                                                            {openLeagues[`${sport.segment}-${league.segment}`] ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )}
                                                        </Box>
                                                    </ListItemButton>

                                                    <Collapse
                                                        in={openLeagues[`${sport.segment}-${league.segment}`]}
                                                        timeout="auto"
                                                        unmountOnExit
                                                    >
                                                        <List component="div" disablePadding>
                                                            {league.matches.map((match) => (
                                                                <ListItemButton
                                                                    key={match.segment}
                                                                    component={Link}
                                                                    to={`/match/${match.segment}`}
                                                                    sx={{ bgcolor: "white", m: "5px 0px 5px 20px", p: "3px 10px" }}
                                                                    onClick={handleClose}

                                                                >
                                                                    <Box sx={{ mr: "5px" }}>
                                                                        <match.icon sx={{ color: "inherit" }} />
                                                                    </Box>
                                                                    <ListItemText primary={match.name} />
                                                                </ListItemButton>
                                                            ))}
                                                        </List>
                                                    </Collapse>
                                                </React.Fragment>
                                            ))}

                                        </List>
                                    </Collapse>
                                </React.Fragment>
                            ))}
                        </List>
                    </Collapse>
                </Box>

                <Box sx={{ bgcolor: '#f5f5f5de', p: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleToggleCategories}
                    >
                        <Typography sx={{ mb: 1 }}>CATEGORIES</Typography>
                        {openCategories ? <ExpandLess /> : <ExpandMore />}
                    </Box>

                    <Collapse in={openCategories} timeout="auto" unmountOnExit>
                        <List>
                            {categoriesData.categories.items.map((item) => (
                                <ListItemButton
                                    key={item.segment}
                                    component={Link}
                                    to={{
                                        pathname: `/category/${item.segment}`,
                                    }}
                                    state={{
                                        data: item.segment,
                                        info: item.info,
                                    }}
                                    onClick={handleClose}
                                    sx={{
                                        justifyContent: "space-between",
                                        margin: "5px 0px",
                                        borderRadius: "5px",
                                        padding: "3px 10px",
                                        bgcolor: "white",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                        <Box>
                                            <CardMedia
                                                component="img"
                                                image={item.icon} alt="Logo"
                                                height={"20px"}
                                                width={"20px"}
                                            // sx={{ height: { lg: '40px', md: '40px', sm: '30px', xs: '20px' } }}
                                            />
                                        </Box>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{ fontSize: "12px", fontWeight: 600, color: "#92928e" }}
                                        >
                                            {item.count}
                                        </Typography>
                                    </Box>
                                </ListItemButton>

                            ))}
                        </List>
                    </Collapse>
                </Box>

                <Box sx={{ bgcolor: '#f5f5f5de', p: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleToggleProviders}
                    >
                        <Typography sx={{ mb: 1, fontSize: "15px", fontWeight: 500 }}>PROVIDERS</Typography>
                        {openProviders ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                    <Collapse in={openProviders} timeout="auto" unmountOnExit>
                        <List>
                            {providersData.providers.items.map((item) => (
                                <ListItemButton
                                    key={item.segment}
                                    component={Link}
                                    to={`/provider/${item.segment}`}
                                    onClick={handleClose}
                                    sx={{
                                        justifyContent: "space-between",
                                        margin: "5px 0px",
                                        borderRadius: "5px",
                                        padding: "6px 12px",
                                        bgcolor: "white",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <item.icon sx={{ fontSize: "20px", color: "inherit" }} />
                                        </Box>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {item.title}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "#92928e",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {item.count}
                                    </Typography>
                                </ListItemButton>

                            ))}
                        </List>
                    </Collapse>
                    <Box sx={{
                        padding: "3px 10px", bgcolor: "#43727a", borderRadius: "5px", color: "white"
                    }}>
                        < Typography sx={{ textAlign: "center" }}>Blog</Typography>
                    </Box>
                    <Typography sx={{ m: "10px 0px", fontSize: "15px", fontWeight: 500 }}>SETTINGS</Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">{language}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="language"
                                onChange={handleChange}
                            >
                                <MenuItem value="ENglish">English</MenuItem>
                                <MenuItem value="Hindi">Hindi</MenuItem>
                                <MenuItem value="Gujarati">Gujarati</MenuItem>
                                <MenuItem value="Kannada">Kannada</MenuItem>
                                <MenuItem value="Tamil">Tamil</MenuItem>
                                <MenuItem value="Telugu">Telugu</MenuItem>
                                <MenuItem value="Marathi">Marathi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/* remain for future */}
                    {/* <Box sx={{
                        padding: "3px 10px", bgcolor: "#43727a", borderRadius: "5px", color: "white"
                    }}>
                        < Typography>Light Mode</Typography>
                    </Box> */}
                </Box>
            </Box >
        </Drawer >
    );
};

export default DesktopComponent;