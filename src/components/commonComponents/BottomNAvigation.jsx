import { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Fade,
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CasinoIcon from "@mui/icons-material/Casino";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/FileDownload";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useNavigate } from "react-router-dom";
import { liveSportsData, sportData, userProfileData } from "../../data/dashboardData";
import { Link as RouterLink } from 'react-router-dom';
import { categoriesData } from "../../data/drawerData";

const popupItems = [
    { label: "Download App", icon: <DownloadIcon /> },
    { label: "Promotions", icon: <CardGiftcardIcon /> },
    { label: "Home", icon: <HomeIcon /> },
    { label: "Bets", icon: <ReceiptIcon /> },
    { label: "Talk to us?", icon: <ChatIcon /> },
    { label: "Deposit", icon: <AccountBalanceWalletIcon /> },
];
const data = ["in-paly", "sports", "casino", "profile"]
const casionData = categoriesData?.categories?.items?.map(item => ({
    info: item?.info,
    title: item?.title,
    icon: item?.icon
}));
const BottomNavWithRadialMenu = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((prev) => !prev);
    const handleNavClick = () => setOpen(false);
    const user = sessionStorage.getItem('username')
    const profileData = userProfileData.find(item => item.value === 'profile');
    return (
        <>
            <Fade in={open} >
                <Box
                    sx={{
                        position: "fixed",
                        bottom: '50px',
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "50%",
                        bgcolor: "#111",
                        border: "4px solid #fbc02d",
                        zIndex: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 14
                    }}
                >
                    {popupItems.map((item, index) => {
                        const angle = (index * 360) / popupItems.length;
                        const radius = 110;
                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);

                        return (
                            <Box
                                key={index}
                                sx={{
                                    position: "absolute",
                                    left: `calc(50% + ${x}px - 25px)`,
                                    top: `calc(50% - ${y}px - 25px)`,
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                    bgcolor: "#fbc02d",
                                    color: "#000",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    textAlign: "center",
                                    px: 1,
                                }}
                            >
                                {item.icon}
                                <Typography fontSize={9}>{item.label}</Typography>
                            </Box>
                        );
                    })}
                    <Box
                        sx={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            bgcolor: "#fbc02d",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#000",
                            position: "relative",
                            zIndex: 20,
                        }}
                    >
                        <SportsEsportsIcon />
                        <Typography fontSize={10}>SportsBook</Typography>
                    </Box>
                </Box>
            </Fade>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    height: 70,
                    bgcolor: "#ffc107",
                    justifyContent: "space-around",
                    alignItems: "center",
                    zIndex: 20,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    display: { lg: 'none', md: 'none', sm: 'flex', xs: 'flex' },
                }}
            >
                <Box sx={{ textDecoration: "none" }} component={RouterLink}
                    to={`/common-list/${data[0]}`} state={{ data: liveSportsData }}>
                    <NavItem icon={<PlayArrowIcon />} label="In-Play" />
                </Box>
                <Box sx={{ textDecoration: "none" }} component={RouterLink}
                    to={`/common-list/${data[1]}`} state={{ data: sportData }}>
                    <NavItem icon={<SportsSoccerIcon />} label="Sports" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        top: -35,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        bgcolor: "#111",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 30,
                        border: "4px solid #ffc107",
                    }}
                >
                    <IconButton onClick={handleToggle} sx={{ color: "#fff" }}>
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
                <Box sx={{ textDecoration: "none" }} component={RouterLink}
                    to={`/common-card/${data[2]}`} state={{ data: casionData }}>
                    <NavItem icon={<CasinoIcon />} label="Casino" onClick={handleNavClick} />
                </Box>
                <Box sx={{ textDecoration: "none" }} component={RouterLink}
                    to={`/user-profile/${data[3]}`} state={{ data: profileData?.data }} >
                    <NavItem icon={<PersonOutlineIcon />} label={user || "user"} />
                </Box>
            </Box >
        </>
    );
};

const NavItem = ({ icon, label, onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#000",
            cursor: "pointer",
        }}
    >
        {icon}
        <Typography variant="caption">{label}</Typography>
    </Box>
);

export default BottomNavWithRadialMenu;
