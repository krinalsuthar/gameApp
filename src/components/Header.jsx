import { Box, Button, CardMedia, FormControl, Grid, InputBase, MenuItem, Select, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/drawer/drawerSlice';
import { CricketIcon, InPlayIcon, SportsbookIcon, CasinoIcon } from '../assets/SVGs/allSVGs';
import { useNavigate } from 'react-router-dom';
import { liveSportsData, sportData, sportsData, userProfileData } from '../data/dashboardData';
import CloseIcon from '@mui/icons-material/Close';
import CommonNavLink from './commonComponents/CommonNavLink';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const typoStyle = {
    fontWeight: 600,
    fontSize: '12px',
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
    const user = useSelector((state) => state.auth.user);
    console.log("🚀 ~ Header ~ user:", user)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const headerData = [
        { title: 'SPORTS', icon: <CricketIcon />, data: sportData, isLoggedIn: true },
        { title: 'IN PLAY', icon: <InPlayIcon />, data: liveSportsData, isLoggedIn: true },
        { title: 'SPORTSBOOK', icon: <SportsbookIcon />, data: "", isLoggedIn: isLoggedIn },
        { title: 'CASINO', icon: <CasinoIcon />, data: "", isLoggedIn: false },
    ];
    console.log("🚀 ~ Header ~ isLogged yp[]lIn:", isLoggedIn)
    return (
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
                            <CloseIcon sx={{ color: 'white' }} />
                        ) : (
                            <DehazeIcon sx={{ color: 'white' }} />
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
                <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-evenly' }}>
                    {headerData?.map((item, index) => (
                        <Box key={index} sx={commonBoxStyle}>
                            <CommonNavLink
                                to={`common-list/${item?.title.toLowerCase()}`}
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
                                }}
                            >
                                DEPOSIT
                            </Button>
                            {/* BALANCE DROPDOWN */}
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
                                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                            <Typography >₹ 0.00</Typography>
                                        </Box>
                                    )}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                bgcolor: "#ffc107",
                                                width: "250px",
                                                mt: 1
                                            }
                                        }
                                    }}
                                >
                                    {["Main Balance", "Withdrawable", "Exposure"]?.map((item) => (
                                        <MenuItem value="withdraw" sx={{ display: "flex", justifyContent: "space-between" }}><Typography>{item}(&#8377;) :</Typography><Typography>0.00</Typography></MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* PROFILE DROPDOWN */}
                            <FormControl
                                variant="standard"
                                sx={{
                                    minWidth: 100,
                                    bgcolor: '#ffc107',
                                    borderRadius: 1,
                                    px: 1,
                                }}
                            >
                                <Select
                                    value={selectedProfileAction}
                                    onChange={(e) => setSelectedProfileAction(e.target.value)}
                                    displayEmpty
                                    IconComponent={ArrowDropDownIcon}
                                    input={<InputBase />}
                                    renderValue={() => (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <AccountCircleIcon fontSize="small" />
                                            <Typography>Demo6</Typography>
                                        </Box>
                                    )}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                bgcolor: "#ffc107",
                                                scrollbarWidth: "none",
                                                width: "250px"
                                            }
                                        }
                                    }}
                                >
                                    {["Main Balance", "Withdrawable", "Exposure", "Bonus", "Wager Bonus"]?.map((item) => (
                                        <MenuItem disabled sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="subtitle1">{item} (&#8377;) : </Typography> <Typography>0.00</Typography>
                                        </MenuItem>
                                    ))}
                                    {userProfileData.map((item, i) => (
                                        <MenuItem key={i} value={item?.value} component={Link} state={{ data: item?.data }} to={`${item?.to}`}>
                                            {console.log(item?.to, "item?.to")}
                                            <item.icon fontSize="small" sx={{ fontSize: 20, color: "inherit", mr: 1 }} />
                                            <Typography>{item.label}</Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </>
                    )}
                </Box>
            </Grid>
        </Grid >
    );
};

export default Header;