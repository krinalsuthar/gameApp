import { Box, CardMedia, Grid, Link, Typography } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/drawer/drawerSlice';
import { CricketIcon, InPlayIcon, SportsbookIcon, CasinoIcon } from '../assets/SVGs/allSVGs';
import { Link as RouterLink } from 'react-router-dom';
import { sportData, sportsData } from '../data/dashboardData';
import CloseIcon from '@mui/icons-material/Close';
import CommonNavLink from './commonComponents/CommonNavLink';

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
    const isDrawerOpen = useSelector((state) => state.drawer.open);
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
                        <Box sx={commonBoxStyle}>
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
                <Box sx={{ display: 'flex' }}>
                    <CommonNavLink to={'login'} sx={{ color: 'black' }}>
                        <Box sx={{ padding: '8px 10px', color: 'black', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                            <Typography sx={typoStyle}>LOGIN</Typography>
                        </Box>
                    </CommonNavLink>

                    <CommonNavLink to={"register"} sx={{ color: 'black' }}>
                        <Box sx={{ padding: '8px 10px', color: 'black', bgcolor: '#ffc107', borderRadius: '5px', m: '0px 5px', cursor: 'pointer' }}>
                            <Typography sx={typoStyle}>REGISTER</Typography>
                        </Box>
                    </CommonNavLink>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Header;