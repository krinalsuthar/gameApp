import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputBase, MenuItem, Select, TextField, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/drawer/drawerSlice';
import { CricketIcon, InPlayIcon, SportsbookIcon, CasinoIcon, SoccerIcon, TennisIcon } from '../assets/SVGs/allSVGs';
import { useNavigate } from 'react-router-dom';
import { liveSportsData, sportsData, userProfileData } from '../data/dashboardData';
import CloseIcon from '@mui/icons-material/Close';
import CommonNavLink from './commonComponents/CommonNavLink';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { LockReset } from '@mui/icons-material';
import { logout } from '../features/drawer/authSlice';
import { casionData, categoriesData } from '../data/drawerData';

const typoStyle = {
    fontWeight: 600,
    fontSize: '12px',
    color: "black"
};
const commonBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    m: '0px 5px',
    cursor: 'pointer',
};

const Header = () => {
    const [selectedBalanceAction, setSelectedBalanceAction] = useState('');
    const [selectedProfileAction, setSelectedProfileAction] = useState('');
    const isDrawerOpen = useSelector((state) => state.drawer.open);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [open, setOpen] = useState(false);
    const user = sessionStorage.getItem('username')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [groupedSportsData, setGroupedSportsData] = useState([]);
    const games = useSelector((state) => state.fancyMarkets);
    // const sportIconMap = {
    //     "4": CricketIcon,
    //     "1": SoccerIcon,
    //     "2": TennisIcon
    // };
    useEffect(() => {
        if (games?.data) {
            const newGroupedData = games?.data?.data?.map(sportItem => {
                const doc = sportItem.doc || [];
                const groupedByTournament = doc.reduce((acc, match) => {
                    const tournamentId = match?.tournament?.id;
                    const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';
                    const isPlay = match?.isPlay
                    const marketId = match?.marketId
                    const numOfBookmaker = match?.numOfBookmaker
                    const numOfFancy = match?.numOfFancy
                    const openDate = match?.openDate
                    const sport = match?.sport
                    const tournament = match?.tournament
                    if (tournamentId) {
                        if (!acc[tournamentName]) {
                            acc[tournamentName] = {
                                id: tournamentId,
                                title: tournamentName,
                                matches: [],
                            };
                        }
                        acc[tournamentName].matches.push({
                            name: match?.name?.trim(),
                            id: match?.id,
                            isPlay: isPlay,
                            marketId: marketId,
                            numOfBookmaker: numOfBookmaker,
                            numOfFancy: numOfFancy,
                            openDate: openDate,
                            sport: sport,
                            tournament: tournament,
                        });
                    }
                    return acc;
                }, {});
                return {
                    id: sportItem._id,
                    name: sportItem.name,
                    leagues: Object.values(groupedByTournament),
                    // icon: sportIconMap[sportItem._id] || null
                };
            });
            // const filteredAndGroupedData = newGroupedData.map((sport, index) => {
            //     return ({
            //         ...sport,
            //         leagues: sport.leagues.map(league => ({
            //             ...league,
            //             matches: league.matches.filter(match => match.name.toLowerCase().includes(searchTerm.toLowerCase()))
            //         })).filter(league => league.matches.length > 0)
            //     });
            // }).filter(sport => sport.leagues.length > 0);
            setGroupedSportsData(newGroupedData);
        }
    }, [games]);
    const [inPlayData, setInPlayData] = useState([]);

    // const { data: games } = useQuery({ queryKey: ["gameData"], queryFn: getMarketMatchData })
    // const games = useSelector((state) => state.fancyMarkets);

    // const sportIconMap = {
    //     "4": CricketIcon,
    //     "1": SoccerIcon,
    //     "2": TennisIcon
    // };
    useEffect(() => {
        if (games?.data) {
            const newGroupedData = games?.data?.data?.map(sportItem => {
                const doc = sportItem.doc || [];
                const groupedByTournament = doc.reduce((acc, match) => {

                    const tournamentId = match?.tournament?.id;
                    const tournamentName = match?.tournament?.name?.trim() || 'Unknown Tournament';
                    const isPlay = match?.isPlay
                    const marketId = match?.marketId
                    const numOfBookmaker = match?.numOfBookmaker
                    const numOfFancy = match?.numOfFancy
                    const openDate = match?.openDate
                    const sport = match?.sport
                    const tournament = match?.tournament
                    if (tournamentId && match.isPlay) {
                        if (!acc[tournamentName]) {
                            acc[tournamentName] = {
                                id: tournamentId,
                                title: tournamentName,
                                matches: [],
                            };
                        }
                        acc[tournamentName].matches.push({
                            name: match?.name?.trim(),
                            id: match?.id,
                            isPlay: isPlay,
                            marketId: marketId,
                            numOfBookmaker: numOfBookmaker,
                            numOfFancy: numOfFancy,
                            openDate: openDate,
                            sport: sport,
                            tournament: tournament,
                        });
                    }
                    return acc;
                }, {});
                return {
                    id: sportItem._id,
                    name: sportItem.name,
                    leagues: Object.values(groupedByTournament),
                    // icon: sportIconMap[sportItem._id] || null
                };
            });
            setInPlayData(newGroupedData);
        }
    }, [games]);
    const headerData = [
        { title: 'SPORTS', icon: <CricketIcon />, data: groupedSportsData, isLoggedIn: true, to: "common-list" },
        { title: 'IN PLAY', icon: <InPlayIcon />, data: inPlayData, isLoggedIn: true, to: "common-list" },
        { title: 'SPORTSBOOK', icon: <SportsbookIcon />, data: "", isLoggedIn: isLoggedIn, to: "sports-book" },
        { title: 'CASINO', icon: <CasinoIcon />, data: casionData, isLoggedIn: isLoggedIn, to: "common-card" },
    ];

    return (
        <>
            <Dialog open={open} >
                <Box sx={{ backgroundColor: '#ffc107', p: 2, position: 'relative' }}>
                    <DialogTitle sx={{ p: 0, m: 0, fontWeight: 'bold' }}>Change Password</DialogTitle>
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <DialogContent dividers>
                    <Typography sx={{ mb: 2 }}><strong>User name:</strong>{user}</Typography>
                    <TextField
                        fullWidth
                        type="password"
                        label="Enter Old Password"
                        margin="dense"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Enter New Password"
                        margin="dense"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Re-Enter New Password"
                        margin="dense"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setOpen(false)}
                        sx={{ minWidth: 100 }}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => setOpen(false)}
                        sx={{ minWidth: 100 }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid
                container
                sx={{
                    justifyContent: 'space-between',
                    bgcolor: 'black',
                    padding: '5px 10px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1300,
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Box onClick={() => dispatch(toggleDrawer())} sx={{ display: "flex" }}>
                            {isDrawerOpen ? (
                                <CloseIcon sx={{ color: "#ffffff" }} />
                            ) : (
                                <DehazeIcon sx={{ color: "#ffffff" }} />
                            )}
                        </Box>
                        <Box>
                            <CommonNavLink>
                                <CardMedia
                                    component="img"
                                    image={logo}
                                    alt="Logo"
                                    sx={{ height: { lg: '40px', md: '40px', sm: '30px', xs: '20px' } }}
                                />
                            </CommonNavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, justifyContent: 'space-evenly' }}>
                        {headerData?.map((item, index) => (
                            <Box key={index} sx={commonBoxStyle}>
                                <CommonNavLink
                                    to={`${item?.to}/${item?.title.toLowerCase()}`}
                                    item={{ data: item.data, isLoggin: item.isLoggedIn }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        {item.icon}
                                        <Typography sx={typoStyle}>{item.title}</Typography>
                                    </Box>
                                </CommonNavLink>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!isLoggedIn ? (
                            <>
                                <CommonNavLink to={'login'}>
                                    <Box sx={{ padding: '8px 10px', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                                        <Typography sx={typoStyle}>LOGIN</Typography>
                                    </Box>
                                </CommonNavLink>
                                <CommonNavLink to={"register"}>
                                    <Box sx={{ padding: '8px 10px', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                                        <Typography sx={typoStyle}>REGISTER</Typography>
                                    </Box>
                                </CommonNavLink>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    startIcon={<LocalAtmIcon />}
                                    sx={{
                                        bgcolor: '#28a745',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '12px',
                                        mr: 1,
                                        display: { lg: "flex", md: "flex", sm: "none", xs: "none" }
                                    }}
                                    onClick={() => navigate("/login")}
                                >
                                    DEPOSIT
                                </Button>
                                <FormControl
                                    variant="standard"
                                    sx={{
                                        minWidth: 100,
                                        bgcolor: '#ffc107',
                                        borderRadius: 1,
                                        mr: 1,
                                        px: 1,
                                    }}
                                >
                                    <Select
                                        value={selectedBalanceAction}
                                        onChange={(e) => setSelectedBalanceAction(e.target.value)}
                                        displayEmpty
                                        IconComponent={ArrowDropDownIcon}
                                        input={<InputBase />}
                                        renderValue={() => (
                                            <Box sx={{ display: 'flex', alignItems: 'center', color: "black" }}>
                                                <Typography >₹ 0.00</Typography>
                                            </Box>
                                        )}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    bgcolor: "#ffc107",
                                                    width: "250px",
                                                    mt: 1,
                                                    color: "black"
                                                }
                                            }
                                        }}
                                    >
                                        {["Main Balance", "Withdrawable", "Exposure"]?.map((item) => (
                                            <MenuItem value="withdraw" sx={{ display: "flex", justifyContent: "space-between" }}><Typography>{item}(&#8377;) :</Typography><Typography>0.00</Typography></MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl
                                    variant="standard"
                                    sx={{
                                        minWidth: 100,
                                        bgcolor: '#ffc107',
                                        borderRadius: 1,
                                        px: 1,
                                        display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                                    }}
                                >
                                    <Select
                                        value={selectedProfileAction}
                                        onChange={(e) => setSelectedProfileAction(e.target.value)}
                                        displayEmpty
                                        IconComponent={ArrowDropDownIcon}
                                        input={<InputBase />}
                                        renderValue={() => (
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: "black" }}>
                                                <AccountCircleIcon fontSize="small" />
                                                <Typography>{user}</Typography>
                                            </Box>
                                        )}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    bgcolor: "#ffc107",
                                                    scrollbarWidth: "none",
                                                    width: "250px",
                                                    color: "black"
                                                }
                                            }
                                        }}
                                    >
                                        {["Main Balance", "Withdrawable", "Exposure", "Bonus", "Wager Bonus"]?.map((item) => (
                                            <MenuItem disabled sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Typography variant="subtitle1">{item} (&#8377;) : </Typography> <Typography>0.00</Typography>
                                            </MenuItem>
                                        ))}
                                        {userProfileData?.map((item, i) => (
                                            <MenuItem key={i} value={item?.value} component={Link} state={item?.to === "/login-default" ? { data: item?.label } : { data: item?.data }} to={item?.label === "LogOut" ? `${item?.to}` : `${item?.to}/${item?.label.trim().toLowerCase()}`}>
                                                <item.icon fontSize="small" sx={{ fontSize: 20, mr: 1 }} />
                                                {item?.label === "LogOut" ? (
                                                    <Typography onClick={() => {
                                                        dispatch(logout())
                                                    }}>{item?.label}</Typography>
                                                ) : (
                                                    <Typography>{item.label}</Typography>
                                                )}
                                            </MenuItem>
                                        ))}
                                        <Button sx={{ ml: 1, color: "black" }} onClick={() => setOpen(true)}><LockReset sx={{ fontSize: 20, color: "inherit", mr: 1 }} /> Change Password</Button>
                                    </Select>
                                </FormControl>
                            </>
                        )}
                    </Box>
                </Grid>
            </Grid >
        </>
    );
};

export default Header;