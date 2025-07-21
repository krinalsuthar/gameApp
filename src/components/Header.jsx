import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputBase, MenuItem, Select, TextField, Typography } from '@mui/material';
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
import { LockReset } from '@mui/icons-material';
import { logout } from '../features/drawer/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { categoriesData } from '../data/drawerData';

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
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [open, setOpen] = useState(false);
    const casionData = categoriesData?.categories?.items?.map(item => ({
        info: item?.info,
        title: item?.title,
        icon: item?.icon
    }));
    const user = sessionStorage.getItem('username')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const headerData = [
        { title: 'SPORTS', icon: <CricketIcon />, data: sportsData, isLoggedIn: true },
        { title: 'IN PLAY', icon: <InPlayIcon />, data: liveSportsData, isLoggedIn: true },
        { title: 'SPORTSBOOK', icon: <SportsbookIcon />, data: "", isLoggedIn: isLoggedIn },
        { title: 'CASINO', icon: <CasinoIcon />, data: casionData, isLoggedIn: isLoggedIn },
    ];
    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    };
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
                    <Box sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, justifyContent: 'space-evenly' }}>
                        {headerData?.map((item, index) => (
                            <Box key={index} sx={commonBoxStyle}>
                                <CommonNavLink
                                    to={item?.title === "CASINO" ? `common-card/${item?.title.toLowerCase()}` : `common-list/${item?.title.toLowerCase()}`}
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
                                        display: { lg: "flex", md: "flex", sm: "none", xs: "none" }
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
                                                <Typography>{user}</Typography>
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
                                        {userProfileData?.map((item, i) => (
                                            <MenuItem key={i} value={item?.value} component={Link} state={item?.to === "/login-default" ? { data: item?.label } : { data: item?.data }} to={`${item?.to}/${item?.label.trim().toLowerCase()}`}>
                                                <item.icon fontSize="small" sx={{ fontSize: 20, color: "inherit", mr: 1 }} />
                                                <Typography>{item.label}</Typography>
                                            </MenuItem>
                                        ))}
                                        <Button sx={{ ml: 1, color: "black" }} onClick={() => setOpen(true)}><LockReset sx={{ fontSize: 20, color: "inherit", mr: 1 }} /> Change Password</Button>
                                        <Button sx={{ ml: 1, color: "black" }} onClick={handleLogout}><LogoutIcon sx={{ fontSize: 20, color: "inherit", mr: 1 }} /> logout</Button>
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