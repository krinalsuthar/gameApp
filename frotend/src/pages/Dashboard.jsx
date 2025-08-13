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
import { setFancyMarkets, setLoading as setFancyLoading, setError as setFancyError } from "../features/Authntication/fancyMarketsSlice";
import { setRawMarketData, setLoading as setRawLoading, setError as setRawError } from "../features/drawer/RawDataSlice";
import { useEffect } from 'react';
import "../loading.css"

const Dashboard = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const open = useSelector((state) => state.drawer.open);
    const drawerWidth = isXs ? 0 : isSm ? 250 : 350;
    const headerHeight = '35px';
    const navigate = useNavigate();

    const { data: fancyData, isLoading: isFancyLoading, isError: isFancyError, error: fancyError } = useQuery({
        queryKey: ["gameData"],
        queryFn: getMarketMatchData,
        refetchOnMount: true,
        cacheTime: 0,
        staleTime: 0,
    });

    const { data: rawData, isLoading: isRawLoading, isError: isRawError, error: rawError } = useQuery({
        queryKey: ["rawData"],
        queryFn: marketRawData,
        refetchOnMount: true,
        cacheTime: 0,
        staleTime: 0,
    });

    useEffect(() => {
        if (isFancyLoading) {
            dispatch(setFancyLoading());
        } else if (isFancyError) {
            dispatch(setFancyError(fancyError.message));
            dispatch(setGlobalError(fancyError.message));
        } else if (fancyData) {
            dispatch(setFancyMarkets(fancyData));
        }

        if (isRawLoading) {
            dispatch(setRawLoading());
        } else if (isRawError) {
            dispatch(setRawError(rawError.message));
            dispatch(setGlobalError(rawError.message));
        } else if (rawData) {
            dispatch(setRawMarketData(rawData));
        }
    }, [fancyData, isFancyLoading, isFancyError, fancyError, rawData, isRawLoading, isRawError, rawError, dispatch]);

    if (isFancyLoading) {
        return (
            <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#373737ff", }}>
                <Box sx={{ transform: " translate(40%, 150%)" }}>
                    <div className="loader"></div>
                </Box>
            </Box>

        )
    }

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
                        bgcolor: "black", display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
                        gap: 1, p: 1
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
                    }}>
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