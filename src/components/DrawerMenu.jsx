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
import { Link as RouterLink } from 'react-router-dom';
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
import { sportData } from '../data/dashboardData';
import CommonNavLink from './commonComponents/CommonNavLink';

const DrawerMenu = () => {
    const open = useSelector((state) => state.drawer.open);
    const dispatch = useDispatch();
    const [dataSate, setDataState] = useState({ title: "", icon: "" })
    const [searchTerm, setSearchTerm] = useState('');
    const [openSports, setOpenSports] = useState({});
    const [openLeagues, setOpenLeagues] = useState({});
    const handleClose = () => dispatch(closeDrawer())
    const [openCategories, setOpenCategories] = useState(true);
    const [openProviders, setOpenProviders] = useState(true);
    const [opeSportsEntire, setOpenSportsEntire] = useState(true);
    const [language, setLanguage] = React.useState('English');
    const casionData = categoriesData?.categories?.items?.map(item => ({
        info: item?.info,
        title: item?.title,
        icon: item?.icon
    }));
    console.log(casionData, "casionData")
    const data1 = [{ sport: sportData, title: "Sports", type: "list" },
    { sport: casionData, title: "Casion", type: "cards" },
    { sport: sportData, title: "Sports", type: "list" },
    { sport: sportData, title: "Sports", type: "list" }]
    console.log(sportData, "sportData")

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
    const handleToggleCategories = () => {
        setOpenCategories((prev) => !prev);
    };
    const handleToggleProviders = () => {
        setOpenProviders((prev) => !prev);
    };
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
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const drawerWidth = isMobile ? 0 : theme.breakpoints.down('md') ? 250 : 350;
    const abc = categoriesData.categories?.items?.map((data) => {
        return data.info
    })
    return (
        <Drawer
            anchor={isMobile ? 'bottom' : 'left'}
            open={open}
            onClose={handleClose}
            variant={isMobile ? 'temporary' : 'persistent'}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    ...(isMobile
                        ? {
                            width: '100%',
                            height: '80vh',
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            boxSizing: 'border-box',
                            zIndex: 1400,
                        }
                        : {
                            top: '50px',
                            width: { lg: 350, md: 350, sm: 250 },
                            height: 'calc(100vh - 50px)',
                            boxSizing: 'border-box',
                            zIndex: 1200,
                            overflowX: 'hidden',
                        }),
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    // marginLeft: isMobile ? 0 : open ? `${drawerWidth}px` : 0,
                    // width: isMobile ? '100%' : open ? `calc(100% - ${drawerWidth}px)` : '100%',
                    transition: 'margin-left 0.3s ease-in-out, width 0.3s ease-in-out',
                    // width: {lg: 350, md: 350, sm: 250, xs: 0 },
                    overflowY: 'auto', scrollbarWidth: "none", overflowX: "hidden", bgcolor: "#f5f5f5de", pb: "50px"
                }}
                role="presentation"
                onKeyDown={handleClose}
            >
                <Grid container spacing={1} sx={{ padding: 2, bgcolor: "#f5f5f5de" }}>
                    {/* {["sport", "Casino", "Promotions", "Refer & Earn"]?.map((item) => (
                        <Grid item lg={5} md={5} key={item} sx={{ padding: "0px" }}>
                            {console.log(item.trim().toLowerCase().concat('Data') === 'sportData')}
                            <CommonNavLink
                                to={`common-list/${item.toLowerCase()}`}
                                item={{ data: item.toLowerCase().concat('Data') }}>
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
                                    onClick={handleClose}
                                >
                                    <CardContent sx={{
                                        padding: "5px !important"
                                    }}>
                                        <Typography variant="h7" component="div" sx={{ textAlign: 'center', color: 'white' }}>
                                            {item}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CommonNavLink>
                        </Grid>
                    ))} */}
                    {data1?.map((item, index) => {
                        return (
                            <Grid item lg={5} md={5} key={index} sx={{ padding: "0px" }}>
                                <CommonNavLink
                                    to={item.type === "list" ? `common-list/${item.title}` : `common-card/${item.title}`}
                                    state={{ data: item.sport }}
                                >
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
                                        onClick={handleClose}
                                    >
                                        <CardContent sx={{ padding: "5px !important" }}>
                                            <Typography variant="h7" component="div" sx={{ textAlign: 'center', color: 'white' }}>
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </CommonNavLink>
                            </Grid>
                        );
                    })}


                </Grid>
                <Box sx={{ bgcolor: '#f5f5f5de', p: 1 }}>
                    <List>
                        {startingData?.starting?.items?.map((item) => (
                            <ListItemButton
                                key={item.segment}
                                component={RouterLink}
                                to={{
                                    pathname: `/common-list/${item?.title}`,
                                }}
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
                                                                    to={`/common-list/${match.segment}`}
                                                                    // to={`/common-page`}
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
                                <CommonNavLink
                                    onClick={handleClose}
                                    to={'common-page'}
                                    item={{
                                        data: item.segment,
                                        info: item.info,
                                    }}
                                    sx={{
                                        display: "flex",
                                        color: "black",
                                        justifyContent: "space-between",
                                        margin: "5px 0px",
                                        borderRadius: "5px",
                                        padding: "6px 12px",
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
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>{item.title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{ fontSize: "12px", fontWeight: 600, color: "#92928e" }}
                                        >
                                            {item.count}
                                        </Typography>
                                    </Box>
                                </CommonNavLink>
                            ))}
                        </List>
                    </Collapse>
                </Box>

                {/* Providers Section */}
                {/* <Divider /> */}
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
                                    // to={`/provider/${item.segment}`}
                                    to={`/common-page`}
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

export default DrawerMenu;