import Header from '../components/Header';
import DrawerMenu from '../components/DrawerMenu';
import Footer from '../components/Footer';
import { Box, Button, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from '../routers/Router';
import BottomNavWithRadialMenu from '../components/commonComponents/BottomNAvigation';
import { useNavigate } from 'react-router-dom';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { getMarketMatchData, marketRawData } from '../api/authApi';
import { useQuery } from '@tanstack/react-query';
import { setFancyMarkets } from '../features/Authntication/fancyMarketsSlice';
import { useEffect } from 'react';
import { setRawMarketData } from '../features/drawer/RawDataSlice';

const Dashboard = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const open = useSelector((state) => state.drawer.open);
    const drawerWidth = isXs ? 0 : isSm ? 250 : 350;
    const headerHeight = '35px';
    const navigate = useNavigate()
    const { data } = useQuery({ queryKey: ["gameData"], queryFn: getMarketMatchData })
    const { data: rawData } = useQuery({
        queryKey: ["rawData"],
        queryFn: marketRawData,
    });
    useEffect(() => {
        if (rawData) {
            dispatch(setRawMarketData(rawData))
        }
    }, [rawData, dispatch])

    useEffect(() => {
        if (data) {
            dispatch(setFancyMarkets(data));
        }
    }, [data, dispatch]);
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: theme.palette.background.secondery }}>
            <CssBaseline />
            <DrawerMenu drawerWidth={drawerWidth} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    marginLeft: isXs ? 0 : open ? `${drawerWidth}px` : 0,
                    width: isXs ? '100%' : open ? `calc(100% - ${drawerWidth}px)` : '100%',
                    transition: 'margin-left 0.3s ease-in-out, width 0.3s ease-in-out',
                }}
            >
                <Header />
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        marginTop: headerHeight,
                    }}
                >
                    <Box sx={{
                        bgcolor: "black", display: { lg: "none", md: "none", sm: "flex", xs: "flex" }
                        , gap: 1, p: 1
                    }}>
                        <Button
                            variant="contained"
                            startIcon={<LocalAtmIcon />}
                            sx={{
                                bgcolor: '#28a745',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '12px',
                                width: "50%",
                            }}
                            onClick={() => navigate("/login")}
                        >
                            DEPOSIT
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<LocalAtmIcon />}
                            sx={{
                                bgcolor: 'red',
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '12px',
                                width: "50%",
                            }}
                            onClick={() => navigate("/login")}
                        >
                            WITHDRAW
                        </Button>
                    </Box>
                    <Box sx={{
                        flex: 1,
                        px: 2,
                        pt: 3
                    }} >
                        <AppRoutes />
                    </Box>
                </Box>
                <Footer />
                <BottomNavWithRadialMenu />
            </Box>
        </Box>
    );
};

export default Dashboard;

