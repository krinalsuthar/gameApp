import React, { useRef, useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    Stack
} from '@mui/material';
import {
    Email, CalendarToday, Phone, AccountCircle, ExpandMore,
    AccountBalanceWallet, LocalAtm, MonetizationOn,
    Equalizer, TrendingUp, Savings, People, Settings,
    Person,
    VerifiedUser,
    Edit
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import CommonTable from '../components/commonComponents/CommonTable';
import { userProfileData } from '../data/dashboardData';

const menuItems = [
    { label: "Profile", icon: <AccountCircle /> },
    { label: "Deposit", icon: <AccountBalanceWallet /> },
    { label: "Withdraw", icon: <LocalAtm /> },
    { label: "Account Statement", icon: <MonetizationOn /> },
    { label: "Transaction History", icon: <TrendingUp /> },
    { label: "Staking Wallet", icon: <Savings /> },
    { label: "P/L Report", icon: <Equalizer /> },
    { label: "My Referrals", icon: <People /> },
    { label: "Setting", icon: <Settings /> }
];

const Dashboard = () => {

    const location = useLocation();
    const data = location?.state?.data
    return (
        <Box sx={{ bgcolor: '#f4f4f4' }}>
            <HeaderData />
            <Grid container spacing={2} sx={{ display: "flex", width: "100%", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, flexWrap: "nowrap", pt: "0px" }}>
                <Paper sx={{
                    width: { lg: "29%", md: "29%", sm: "39%", xs: "100%" }, mx: "auto", height: "fit-content", p: 2, bgcolor: "#fff", borderRadius: 4,
                }}>
                    <Paper
                        elevation={4}
                        sx={{
                            border: "10px solid #f1f1f1",
                            borderRadius: 4,
                            p: 2,
                            pt: 0,
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: "#f1f1f1",
                                borderRadius: "0px 0px 70% 70%",
                                maxWidth: 90,
                                minHeight: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "auto",
                            }}
                        >
                            <Person sx={{ color: "#fbc02d", fontSize: 40 }} />
                        </Box>

                        <Box mt={4}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    bgcolor: "#e0e0e0",
                                    py: 0.5,
                                    px: 2,
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    display: "inline-block",
                                }}
                            >
                                Demo8
                            </Typography>
                        </Box>

                        {/* Editable Fields */}
                        <Box mt={2} display="flex" flexDirection="column" gap={1}>
                            {[
                                {
                                    icon: <Email />,
                                    label: "Enter Email",
                                },
                                {
                                    icon: <CalendarToday />,
                                    label: "Enter Date Of Birth",
                                },
                                {
                                    icon: <Phone />,
                                    label: "Enter your Mobile No",
                                    trailing: <VerifiedUser sx={{ color: "green", fontSize: 16 }} />,
                                },
                            ].map((item, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        bgcolor: "#e0e0e0",
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box display="flex" alignItems="center" gap={1}>
                                        {item.icon}
                                        <Typography fontSize={14} fontWeight={500}>
                                            {item.label}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center" gap={0.5}>
                                        <Edit fontSize="small" />
                                        {item.trailing}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                    <Box mt={2} display="flex" flexDirection="column" gap={2}>
                        {["Bank Details", "Change Password"].map((section, i) => (
                            <Accordion key={i} elevation={1} sx={{ borderRadius: 2, bgcolor: "#f1f1f1" }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography fontWeight={600}>{section}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontSize={14}>Content for {section}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Paper>
                <Box sx={{ width: { lg: "69%", md: "69%", sm: "59%", xs: "100%" } }}>
                    {data.map((row, rowIndex) => (
                        <Paper
                            key={rowIndex}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: 2,
                                mb: 2,
                                bgcolor: "#fff",
                                p: 2,
                                borderRadius: 4,
                            }}
                        >
                            {row.map((item, index) => (
                                <Paper
                                    key={index}
                                    elevation={4}
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        backgroundColor: "#f9f9f9",
                                        p: 0,
                                        border: "10px solid #f1f1f1"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box sx={{ color: "#fbc02d", bgcolor: "#f1f1f1", p: 2, borderRadius: "0px 0px 70% 0px" }}>
                                            <FontAwesomeIcon icon={item.icon} size="lg" />
                                        </Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ fontWeight: 600, color: "#fbc02d", bgcolor: "#f1f1f1", width: "-webkit-fill-available", p: 1, textAlign: "center", transform: "scaleX(1.1)" }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            minHeight: 100,
                                        }}
                                    >
                                        <Typography variant="h5" fontWeight={600}>
                                            ₹{item.bal.toFixed(2)}
                                        </Typography>
                                    </Box>
                                </Paper>
                            ))}
                        </Paper>
                    ))}
                </Box>
            </Grid>
        </Box>
    );
};

export default Dashboard;

export function HeaderData() {
    const [selected, setSelected] = useState("Profile");
    return (

        <Box sx={{ overflowX: "auto", width: "100%", p: 1, scrollbarWidth: "none", mb: 2, bgcolor: "#fff" }}>
            <Stack direction="row" spacing={1} sx={{ minWidth: "max-content" }}>
                {userProfileData?.map((item, index) => (
                    <Paper
                        key={index}
                        onClick={() => setSelected(item.label)}
                        elevation={0}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            bgcolor: selected === item.label ? "#ffc107" : "#f2f2f2",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            textDecoration: "none",
                        }}
                        component={Link} state={{ data: item?.data }} to={`${item?.to}`}
                    >
                        <Box
                            sx={{
                                bgcolor: "#121212",
                                color: "white",
                                p: 0.5,
                                borderRadius: 1.5,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 32,
                                height: 32
                            }}
                        >
                            <item.icon fontSize="small" sx={{ fontSize: 20, color: "inherit" }} />
                        </Box>
                        {item.label && (
                            <Typography fontWeight={600} fontSize={14}>
                                {item.label}
                            </Typography>
                        )}
                    </Paper>
                ))}
            </Stack>
        </Box >
    )
}