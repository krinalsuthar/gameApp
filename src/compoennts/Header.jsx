import { Box, CardMedia, Grid, Link, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/drawer/drawerSlice';
import { CricketIcon, InPlayIcon, SportsbookIcon, CasinoIcon } from '../assets/SVGs/allSVGs';
import { Link as RouterLink } from 'react-router-dom';
import { sportData, sportsData } from '../data/dashboardData';

const typoStyle = {
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '20px',
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
const headerData = [
    { title: 'SPORTS', icon: <CricketIcon />, data: sportData, isLoggedIn: true },
    { title: 'IN PLAY', icon: <InPlayIcon />, data: sportsData, isLoggedIn: true },
    { title: 'SPORTSBOOK', icon: <SportsbookIcon />, data: "", isLoggedIn: false },
    { title: 'CASINO', icon: <CasinoIcon />, data: "", isLoggedIn: false },
];

const Header = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
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
            }}
        >
            <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <Box onClick={() => dispatch(toggleDrawer())}>
                        <DehazeIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                        <Link component={RouterLink} to="/">
                            <CardMedia
                                component="img"
                                image={logo}
                                alt="Logo"
                                sx={{ height: { lg: '40px', md: '40px', sm: '30px', xs: '20px' } }}
                            />
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-evenly' }}>
                    {headerData?.map((item, index) => (
                        <Box sx={commonBoxStyle}>
                            <Link
                                component={RouterLink}
                                to={{
                                    pathname: '/common-list',
                                }}
                                state={{ data: item.data, isLoggin: item.isLoggedIn }}
                                underline="none"
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    {item.icon}
                                    <Typography sx={typoStyle}>{item.title}</Typography>
                                </Box>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ padding: '8px 10px', color: 'black', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                        <Link component={RouterLink} to="/login" underline="none" sx={{ color: 'black' }}>
                            <Typography sx={typoStyle}>LOGIN</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ padding: '8px 10px', color: 'black', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                        <Link component={RouterLink} to="/register" underline="none" sx={{ color: 'black' }}>
                            <Typography sx={typoStyle}>REGISTER</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Header;