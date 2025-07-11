import React, { useState } from "react";
import {
    Box, Paper, IconButton, Switch,
    Typography,
    Button,
    ToggleButtonGroup,
    ToggleButton,
    Tab,
    Tabs,
    Divider,
    Collapse,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";
import headingImage from "../assets/headingImage.png"; // make sure image path is correct
import CommonChartSwitcher from "../components/commonComponents/CommonChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AllIconsDisplay = () => {
    const inningsList = ["1st INNS", "2nd INNS"];
    const [clickBetting, setClickBetting] = useState(false);
    const [acceptOdds, setAcceptOdds] = useState(false);
    const [selectedTab, setSelectedTab] = useState("betSlip");
    const [opeSportsEntire, setOpenSportsEntire] = useState(true);
    const handleToggleSportsEntire = () => {
        setOpenSportsEntire((prev) => !prev);
    };
    // const [clickBetting, setClickBetting] = useState(false);
    // const [acceptOdds, setAcceptOdds] = useState(false);
    const [tab, setTab] = useState(0);

    const fancyData = [
        { label: "6 OVER RUN BAN", pink: 45, blue: 47 },
        { label: "6 OVER RUN SL", pink: 51, blue: 53 },
        { label: "10 OVER RUN BAN", pink: 73, blue: 75 },
        { label: "10 OVER RUN SL", pink: 83, blue: 85 },
        { label: "20 OVER RUN BAN", pink: 178, blue: 181 },
        { label: "20 OVER RUN SL", pink: 160, blue: 163 },
    ];


    const lineChartData = {
        "1st INNS": [
            {
                name: "Bangladesh",
                data: [0, 2, 4, 5, 6, 6.5, 7, 8, 8.2, 8.5, 9, 9.5, 10, 9.8, 9.5, 9.2, 8.5, 8.0, 7.5, 7],
            },
            {
                name: "Sri Lanka",
                data: [0, 1, 2, 3, 4, 4.2, 4.5, 5, 6, 7, 7.5, 8, 8.3, 8.5, 8.7, 8.9, 9.0, 9.1, 9.2, 9.3],
            },
        ],
        "2nd INNS": [
            {
                name: "Bangladesh",
                data: [0, 1, 2, 2.5, 3.5, 4, 4.8, 5.2, 5.7, 6, 6.2, 6.8, 7.2, 7.5, 7.8, 8, 8.2, 8.4, 8.5, 9],
            },
            {
                name: "Sri Lanka",
                data: [0, 1, 1.5, 2, 2.5, 3, 3.4, 3.8, 4.2, 4.5, 5, 5.3, 5.8, 6.2, 6.5, 6.9, 7.1, 7.5, 7.8, 8],
            },
        ],
    };

    const barChartData = {
        "1st INNS": [
            {
                name: "Bangladesh",
                data: [4, 5, 6, 5.5, 4.5, 5.7, 6.3, 6, 7, 5, 6, 7, 8, 6, 5, 4, 4.2, 4.8, 3.9, 2],
            },
            {
                name: "Sri Lanka",
                data: [3.5, 4, 4.8, 4.2, 3.9, 4.1, 4.6, 5, 5.2, 5.5, 6, 6.2, 6.5, 6.8, 6.9, 7, 7.1, 7.3, 7.4, 7.5],
            },
        ],
        "2nd INNS": [
            {
                name: "Bangladesh",
                data: [2, 3, 4, 4.5, 5, 5.2, 5.8, 6, 6.5, 6.8, 7, 7.2, 7.5, 7.7, 7.9, 8.1, 8.2, 8.3, 8.4, 8.5],
            },
            {
                name: "Sri Lanka",
                data: [1, 2, 2.8, 3.5, 4, 4.5, 5, 5.2, 5.4, 5.8, 6, 6.3, 6.6, 6.8, 7, 7.3, 7.5, 7.7, 7.9, 8],
            },
        ],
    };

    return (
        <Box sx={{ position: "relative", mb: 4, p: 2 }}>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Box
                    sx={{
                        width: { lg: "59%", md: "59%", sm: "100%", xs: "100%" },
                        borderRadius: "5px",
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: 1.5,
                            mb: 2,
                            // py: 1.5,
                            borderRadius: 2,
                            minHeight: 60,
                        }}
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography variant="body1" fontWeight="medium" sx={{
                                display: { xs: "flex" },
                                flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
                                fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "10px" },
                            }}>
                                Today <b>11:30 PM</b>
                            </Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            T20 Blast
                        </Typography>
                        <Box display="flex" gap={1}>
                            <IconButton size="small">
                                <BarChartIcon />
                            </IconButton>
                            <IconButton size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Paper>
                    <Paper>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#f5f5f5de",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                SL
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                }}
                            >
                                <Typography fontWeight="bold">SRI LANKA</Typography>
                                <img
                                    src="/icons/vs-yellow.svg"
                                    alt="vs"
                                    style={{ height: 20, width: 20 }}
                                />
                                <Typography fontWeight="bold">BANGLADESH</Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: "#f5f5f5de",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                BAN
                            </Box>
                        </Box>
                        <Box>
                            <CommonChartSwitcher
                                lineChartData={lineChartData}
                                barChartData={barChartData}
                                inningsList={inningsList}
                            />
                        </Box>
                        <Box sx={{ background: "#f5f5f5", borderRadius: 2 }}>
                            <Tabs
                                value={tab}
                                onChange={(e, v) => setTab(v)}
                                // variant="fullWidth"
                                sx={{ mt: 2 }}
                            // TabIndicatorProps={{ style: { display: "none" } }}
                            >
                                {["All", "Match Odd", "Bookmakers"].map((label, idx) => (
                                    <Tab
                                        key={idx}
                                        label={label}
                                        sx={{
                                            border: "1px solid #ffcc00",
                                            fontWeight: 600,
                                            color: "black",
                                            // color: tab === idx ? "#000" : "#000",
                                            bgcolor: tab === idx ? "#ffcc00" : "#fff",
                                            py: 0
                                            // borderRight: idx < 2 ? "1px solid #ccc" : "none",
                                        }}
                                    />
                                ))}
                            </Tabs>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: 2, mb: 2 }} onClick={handleToggleSportsEntire}>
                                <Typography fontWeight="bold" mb={1}>
                                    MATCH ODDS
                                </Typography>
                                {opeSportsEntire ? <ExpandLess /> : <ExpandMore />}

                                <Collapse in={opeSportsEntire} timeout="auto" unmountOnExit>
                                    {["Bangladesh", "Sri Lanka"].map((team) => (
                                        <>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }} key={team} mb={1}>
                                                <Box>
                                                    <Typography fontWeight={500}>{team}</Typography>
                                                    <Typography color="green">0</Typography>
                                                </Box>
                                                <Box display="flex" sx={{ height: "fit-content", textAlign: "center" }} gap={1} flexWrap="wrap" mt={1}>
                                                    {[3.15, 3.2, 3.25].map((odd, i) => (
                                                        <Box sx={{
                                                            bgcolor: "#bbdefb",
                                                            px: 1.5,
                                                            // py: 0.5,
                                                            borderRadius: 1,
                                                            fontWeight: 500,
                                                            height: "fit-content",
                                                            minWidth: "30px"
                                                        }}>
                                                            <Typography
                                                                variant="subtitle2"
                                                                sx={{ height: "13px" }}
                                                            >
                                                                {odd}
                                                            </Typography>
                                                            <Typography variant="caption">1.5</Typography>
                                                        </Box>
                                                    ))}
                                                    {[3.35, 3.4, 3.5].map((odd, i) => (
                                                        <Box sx={{
                                                            bgcolor: "#ffcdd2",
                                                            px: 1.5,
                                                            // py: 0.5,
                                                            borderRadius: 1,
                                                            fontWeight: 500,
                                                            minWidth: "30px"
                                                            // height: "fit-content"
                                                        }}>
                                                            <Typography
                                                                variant="subtitle2"
                                                                sx={{ height: "13px" }}
                                                            >
                                                                {odd}
                                                            </Typography>
                                                            <Typography variant="caption">1.5</Typography>
                                                        </Box>

                                                    ))}
                                                </Box>
                                            </Box>
                                            <Divider />
                                        </>
                                    ))}
                                </Collapse>
                            </Box>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: 2, mb: 2 }}>
                                <Typography fontWeight="bold" mb={1}>
                                    BOOKMAKER
                                </Typography>
                                {["Bangladesh", "Sri Lanka"].map((team) => (
                                    <React.Fragment key={team}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                mb: 1,
                                            }}
                                        >
                                            {/* Team Info */}
                                            <Box>
                                                <Typography fontWeight={500}>{team}</Typography>
                                                <Typography color="green">0</Typography>
                                            </Box>

                                            {/* Odds or Suspended */}
                                            {team === "Bangladesh" ? (
                                                <Box
                                                    sx={{
                                                        background: "linear-gradient(to right, #e6f7ff 50%, #fff0f0 50%)",
                                                        borderRadius: 1,
                                                        textAlign: "center",
                                                        px: 2,
                                                        py: 0.5,
                                                        border: "1px solid #ddd",
                                                        fontWeight: 600,
                                                        fontSize: "14px",
                                                        // minWidth: "120px",
                                                    }}
                                                >
                                                    SUSPENDED
                                                </Box>
                                            ) : (
                                                <Box
                                                    display="flex"
                                                    sx={{ height: "fit-content", textAlign: "center" }}
                                                    gap={1}
                                                    flexWrap="wrap"
                                                    mt={1}
                                                >
                                                    {[3.15, 3.2, 3.25].map((odd, i) => (
                                                        <Box
                                                            key={`blue-${i}`}
                                                            sx={{
                                                                bgcolor: "#bbdefb",
                                                                px: 1.5,
                                                                borderRadius: 1,
                                                                fontWeight: 500,
                                                                minWidth: "30px",
                                                            }}
                                                        >
                                                            <Typography variant="subtitle2" sx={{ height: "13px" }}>
                                                                {odd}
                                                            </Typography>
                                                            <Typography variant="caption">1.5</Typography>
                                                        </Box>
                                                    ))}
                                                    {[3.35, 3.4, 3.5].map((odd, i) => (
                                                        <Box
                                                            key={`red-${i}`}
                                                            sx={{
                                                                bgcolor: "#ffcdd2",
                                                                px: 1.5,
                                                                borderRadius: 1,
                                                                fontWeight: 500,
                                                                minWidth: "30px",
                                                            }}
                                                        >
                                                            <Typography variant="subtitle2" sx={{ height: "13px" }}>
                                                                {odd}
                                                            </Typography>
                                                            <Typography variant="caption">1.5</Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                        <Divider />
                                    </React.Fragment>
                                ))}

                            </Box>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: 2, mb: 2 }}>
                                <Typography fontWeight="bold" mb={1}>
                                    TOSS
                                </Typography>
                                {["BAN", "SL"].map((team) => (
                                    <>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }} key={team} mb={1}>
                                            <Box>
                                                <Typography fontWeight={500}>{team}</Typography>
                                                <Typography color="green">0</Typography>
                                            </Box>
                                            <Box display="flex" sx={{ height: "fit-content", textAlign: "center" }} gap={1} flexWrap="wrap" mt={1}>
                                                {[3.15, 3.2, 3.25].map((odd, i) => (
                                                    <Box sx={{
                                                        bgcolor: "#bbdefb",
                                                        px: 1.5,
                                                        // py: 0.5,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                        height: "fit-content",
                                                        minWidth: "30px"
                                                    }}>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ height: "13px" }}
                                                        >
                                                            {odd}
                                                        </Typography>
                                                        <Typography variant="caption">1.5</Typography>
                                                    </Box>
                                                ))}
                                                {[3.35, 3.4, 3.5].map((odd, i) => (
                                                    <Box sx={{
                                                        bgcolor: "#ffcdd2",
                                                        px: 1.5,
                                                        // py: 0.5,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                        minWidth: "30px"
                                                        // height: "fit-content"
                                                    }}>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ height: "13px" }}
                                                        >
                                                            {odd}
                                                        </Typography>
                                                        <Typography variant="caption">1.5</Typography>
                                                    </Box>

                                                ))}
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </>
                                ))}
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ffc107",
                                    color: "#000",
                                    fontWeight: 600,
                                    mb: 1,
                                }}
                            >
                                FANCY
                            </Button>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: 2 }}>
                                <Typography fontWeight="bold" mb={1}>
                                    FANCY BET (SRI LANKA V BANGLADESH)
                                </Typography>
                                {fancyData.map((item, index) => (
                                    <Box
                                        key={index}
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        py={1}
                                        borderBottom="1px solid #ddd"
                                    >
                                        <Box>
                                            <Typography fontSize="14px">{item.label}</Typography>

                                        </Box>
                                        <Box display="flex" sx={{ textAlign: "center" }} gap={1}>
                                            <Typography fontSize="12px" color="gray" mr={2}>
                                                Stake Limit: 50 - 50000<br />Max Profit: 200000
                                            </Typography>
                                            <Box display="flex" sx={{ height: "fit-content", textAlign: "center" }} gap={1} flexWrap="wrap" mt={1}>


                                                {[3.15, 3.2, 3.25].map((odd, i) => (
                                                    <Box sx={{
                                                        bgcolor: "#bbdefb",
                                                        px: 1.5,
                                                        // py: 0.5,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                        height: "fit-content",
                                                        minWidth: "30px"
                                                    }}>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ height: "13px" }}
                                                        >
                                                            {odd}
                                                        </Typography>
                                                        <Typography variant="caption">1.5</Typography>
                                                    </Box>
                                                ))}
                                                {[3.35, 3.4, 3.5].map((odd, i) => (
                                                    <Box sx={{
                                                        bgcolor: "#ffcdd2",
                                                        px: 1.5,
                                                        // py: 0.5,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                        minWidth: "30px"
                                                        // height: "fit-content"
                                                    }}>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{ height: "13px" }}
                                                        >
                                                            {odd}
                                                        </Typography>
                                                        <Typography variant="caption">1.5</Typography>
                                                    </Box>

                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ width: { lg: "39%", md: "39%", sm: "100%", xs: "100%" } }}>
                    <Paper sx={{ p: 1, mb: 1 }}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <Switch
                                    checked={clickBetting}
                                    onChange={() => setClickBetting(!clickBetting)}
                                />
                                <Typography >1 Click Betting</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Switch
                                    checked={acceptOdds}
                                    onChange={() => setAcceptOdds(!acceptOdds)}
                                />
                                <Typography >Accept any ODDS</Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper>
                        <Box
                            display="flex"
                            sx={{
                                borderRadius: "4px 4px 0px 0px",
                                overflow: "hidden",
                                boxShadow: 1,
                            }}
                        >
                            <Box
                                onClick={() => setSelectedTab("betSlip")}
                                sx={{
                                    flex: 1,
                                    py: 1,
                                    textAlign: "center",
                                    bgcolor: "#535558",
                                    color: selectedTab === "betSlip" ? "#fff" : "#000",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                <AddIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} />
                                Bet Slip
                            </Box>
                            <Box
                                onClick={() => setSelectedTab("myBets")}
                                sx={{
                                    flex: 1,
                                    py: 1,
                                    textAlign: "center",
                                    bgcolor: "#ffc107",
                                    color: selectedTab === "myBets" ? "#000" : "#000",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                <DescriptionIcon
                                    fontSize="small"
                                    sx={{ verticalAlign: "middle", mr: 0.5 }}
                                />
                                My Bets
                            </Box>
                        </Box>

                        {/* Content Area */}
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                mt: -0.5,
                                py: 2,
                                textAlign: "center",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                fontSize: "14px",
                            }}
                        >
                            No bets placed in the selected event
                        </Box>
                    </Paper>
                </Box>
            </Box >
        </Box >
    );
};

export default AllIconsDisplay;
