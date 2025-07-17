import Header from '../components/Header';
import DrawerMenu from '../components/DrawerMenu';
import Footer from '../components/Footer';
import React from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import AppRoutes from '../routers/Router';
import BottomNavWithRadialMenu from '../components/commonComponents/BottomNAvigation';

const App = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm')); // <600
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-900
    const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // >=900
    const open = useSelector((state) => state.drawer.open);
    const drawerWidth = isXs ? 0 : isSm ? 250 : 350;
    const headerHeight = '50px';

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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
                        padding: 2,
                        marginTop: headerHeight,
                    }}
                >
                    <AppRoutes />
                </Box>
                <Footer />
                <BottomNavWithRadialMenu />
            </Box>
        </Box>
    );
};

export default App;
