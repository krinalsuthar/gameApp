import { useState } from "react";
import {
    Box, Paper, IconButton, Switch,
    Typography,
    Tab,
    Tabs,
    Collapse,
    TextField,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import CommonChartSwitcher from "./CommonChart";
import { useLocation } from "react-router-dom";
// import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CommonMatch = () => {
    const location = useLocation();
    const { data, info } = location?.state;
    const inningsList = ["1st INNS", "2nd INNS"];
    const [clickBetting, setClickBetting] = useState(false);
    const [acceptOdds, setAcceptOdds] = useState(false);
    const [collapse, setCollapse] = useState(true)
    const [tab, setTab] = useState(0);
    const [values, setValues] = useState([20, 50, 100]);
    const [readOnly, setReadOnly] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("betSlip");
    const [stake, setStake] = useState(0);
    const [bestSliptData, setBestSliptData] = useState({
        isOpen: false,
        label: '',
        odds: null,
        bgcolor: '',
    })
    const odds = 2.08;
    const [profit, setProfit] = useState(0);
    const presetAmounts = [500, 1000, 5000, "10K", "50K", "100K", "500K", "5M"];
    const parseAmount = (val) => {
        if (typeof val === "number") return val;
        return parseInt(val.replace("K", "000").replace("M", "000000"));
    };

    const handlePresetClick = (amount) => {
        const value = parseAmount(amount);
        const newStake = stake + value;
        setStake(newStake);
        setProfit(((odds - 1) * newStake).toFixed(2));
    };

    const handleStakeChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setStake(value);
        setProfit(((odds - 1) * value).toFixed(2));
    };

    const incrementStake = () => {
        const newStake = stake + 10;
        setStake(newStake);
        setProfit(((odds - 1) * newStake).toFixed(2));
    };

    const decrementStake = () => {
        const newStake = Math.max(0, stake - 10);
        setStake(newStake);
        setProfit(((odds - 1) * newStake).toFixed(2));
    };

    const clearAll = () => {
        setBestSliptData((prev) => ({ ...prev, isOpen: false }))
        setStake(0);
        setProfit(0);
    };

    const handleAcceptToggle = () => {
        setAcceptOdds(!acceptOdds)
        setOpen(true);
    };

    const handleConfirm = () => {
        setOpen(true);
        setAcceptOdds(true)
        setOpen(false);
        console.log("Accepted");
    };

    const handleDecline = () => {
        setAcceptOdds(false)
        setOpen(false);
        console.log("Declined");
    };

    const handleChange = (index, newValue) => {
        const updated = [...values];
        updated[index] = newValue;
        setValues(updated);
    };
    const handleToggle = () => {
        setCollapse((prev) => !prev)
    }
    const matchName = info;
    const [teamA, , teamB] = matchName.split(" ");
    const country1 = teamA.slice(0).toUpperCase();
    const country2 = teamB.slice(0).toUpperCase();
    const shortA = teamA.slice(0, 2).toUpperCase();
    const shortB = teamB.slice(0, 2).toUpperCase();
    const countryData = [country1, country2, shortA, shortB]

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
            <Dialog
                open={open}
                onClose={handleDecline}
                scroll="body" // ensures it's not fixed to the top
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        p: 2,
                        minWidth: 300,
                        textAlign: "center",
                        position: "absolute",
                        top: { lg: "10%", md: "10%", sm: "15%", xs: "15%" },
                        left: "50%",
                        transform: "translate(-50%, -50%) !important", // center it
                    }
                }}
            >
                <DialogContent>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                        Please confirm that you're allowing exchange system to place bets
                        on any odds at Betfair accepted rate
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
                    <Button
                        onClick={handleConfirm}
                        variant="contained"
                        sx={{ bgcolor: "green", color: "white", px: 3 }}
                    >
                        Accept
                    </Button>
                    <Button
                        onClick={handleDecline}
                        variant="contained"
                        sx={{ bgcolor: "red", color: "white", px: 3 }}
                    >
                        Decline
                    </Button>
                </DialogActions>
            </Dialog>
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
                            <IconButton size="small" sx={{ border: "1px solid black", borderRadius: "10px" }} onClick={handleToggle}>
                                {collapse ? <BarChartIcon /> : <BarChartIcon />}
                            </IconButton>
                            <IconButton size="small" sx={{ border: "1px solid black", borderRadius: "10px" }}>
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
                                px: 3,
                                py: 1
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
                                    p: 2
                                }}
                            >
                                {countryData[2]}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                }}
                            >
                                <Typography fontWeight="bold">{countryData[0]}</Typography>
                                <img
                                    src="/icons/vs-yellow.svg"
                                    alt="vs"
                                    style={{ height: 20, width: 20 }}
                                />
                                <Typography fontWeight="bold">{countryData[1]}</Typography>
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
                                    p: 2
                                }}
                            >
                                {countryData[3]}
                            </Box>
                        </Box>
                        <Collapse in={collapse} timeout="auto" unmountOnExit>
                            <Box>
                                <CommonChartSwitcher
                                    lineChartData={lineChartData}
                                    barChartData={barChartData}
                                    inningsList={inningsList}
                                />
                            </Box>
                        </Collapse>
                        <Box sx={{ background: "#f5f5f5", borderRadius: 2 }}>
                        </Box>
                    </Paper>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ flex: 1 }}>
                            <Tabs
                                value={tab}
                                onChange={(e, v) => setTab(v)}
                                sx={{ mt: 2 }}
                                TabIndicatorProps={{
                                    style: { display: 'none' }
                                }}
                            >
                                {["All", "Match Odd", "Bookmakers"].map((label, idx) => (
                                    <Tab
                                        key={idx}
                                        label={label}
                                        sx={{
                                            border: "1px solid #ffcc00",
                                            fontWeight: 600,
                                            color: "black",
                                            bgcolor: tab === idx ? "#ffcc00" : "#fff",
                                            py: 0,
                                            "&.Mui-selected": {
                                                borderBottom: "none",
                                                color: "#fff",
                                            },
                                        }}
                                    />
                                ))}
                            </Tabs>
                            {data?.filter((section) => {
                                if (section.type === "fancy") return true;
                                if (tab === 0) return true; // All
                                if (tab === 1) return section.type === "team"; // Match Odds
                                if (tab === 2) return section.type === "bookmaker"; // Bookmakers
                                return false;
                            })
                                .map((section, index) => (
                                    <Box key={index} sx={{ bgcolor: "#fff", borderRadius: 1, p: 2, mb: 2 }}>
                                        <Typography fontWeight="bold" mb={1}>{section.title}</Typography>

                                        {/* FANCY */}
                                        {section.type === "fancy" ? (
                                            section.data.map((bet, index) => (
                                                <Box
                                                    key={index}
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    py={1}
                                                    sx={{ borderBottom: "1px solid #ddd", "&:last-child": { borderBottom: "none" } }}
                                                >
                                                    <Box>
                                                        <Typography fontSize="14px">{bet.label}</Typography>
                                                    </Box>
                                                    <Box display="flex" sx={{ textAlign: "center" }} gap={1}>
                                                        <Typography fontSize="12px" color="gray" mr={2}>
                                                            Stake Limit: {section.stakeLimit}<br />Max Profit: {section.maxProfit}
                                                        </Typography>
                                                        {[bet.back, bet.lay].map((entry, i) => (
                                                            <Box
                                                                key={i}
                                                                sx={{
                                                                    bgcolor: i === 0 ? "#ffcdd2" : "#bbdefb",
                                                                    borderRadius: 1,
                                                                    fontWeight: 500,
                                                                    minWidth: "40px",
                                                                    height: "fit-content",
                                                                    textAlign: "center"
                                                                }}
                                                                onClick={() => setBestSliptData({
                                                                    isOpen: true,
                                                                    label: bet?.label,
                                                                    odds: entry?.odds,
                                                                    bgcolor: i === 0 ? "#ffcdd2" : "#bbdefb",
                                                                })}>
                                                                <Typography variant="subtitle2" sx={{ height: "13px" }} >{entry.odds}</Typography>
                                                                <Typography variant="caption" >{entry.stake}</Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            ))
                                        ) : (
                                            Object.entries(section.data || {}).map(([team, odds], idx) => (
                                                <Box
                                                    key={team}
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        mb: 1,
                                                        borderBottom: "1px solid #ddd",
                                                        "&:last-child": { borderBottom: "none" },
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography fontWeight={500} >{team}</Typography>
                                                        <Typography color="green">0</Typography>
                                                    </Box>

                                                    {section.type === "bookmaker" && odds?.status === "SUSPENDED" ? (
                                                        <Box
                                                            sx={{
                                                                background: "linear-gradient(to right, #e6f7ff 50%, #fff0f0 50%)",
                                                                borderRadius: 1,
                                                                textAlign: "center",
                                                                p: 1,
                                                                border: "1px solid #ddd",
                                                                fontWeight: 600,
                                                                fontSize: "14px",
                                                                height: "fit-content",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            SUSPENDED
                                                        </Box>
                                                    ) : (
                                                        <Box display="flex" sx={{ textAlign: "center" }} gap={1} flexWrap="wrap" mt={1}>
                                                            {odds.back?.map((odd, i) => (
                                                                <Box
                                                                    key={`back-${i}`}
                                                                    sx={{
                                                                        bgcolor: "#bbdefb",
                                                                        borderRadius: 1,
                                                                        fontWeight: 500,
                                                                        minWidth: "40px",
                                                                        height: "fit-content",
                                                                        textAlign: "center",
                                                                        cursor: "pointer"
                                                                    }}
                                                                    onClick={() => setBestSliptData({
                                                                        isOpen: true,
                                                                        label: team,
                                                                        odds: odd,
                                                                        bgcolor: "#bbdefb",
                                                                    })}>
                                                                    <Typography variant="subtitle2" sx={{ height: "13px" }}>{odd}</Typography>
                                                                    <Typography variant="caption">1.5</Typography>
                                                                </Box>
                                                            ))}
                                                            {odds.lay?.map((odd, i) => (
                                                                <Box
                                                                    key={`lay-${i}`}
                                                                    sx={{
                                                                        bgcolor: "#ffcdd2",
                                                                        borderRadius: 1,
                                                                        fontWeight: 500,
                                                                        minWidth: "40px",
                                                                        height: "fit-content",
                                                                        textAlign: "center",
                                                                        cursor: "pointer"
                                                                    }}
                                                                    onClick={() => setBestSliptData({
                                                                        isOpen: true,
                                                                        label: team,
                                                                        odds: odd,
                                                                        bgcolor: "#ffcdd2",
                                                                    })}
                                                                >
                                                                    <Typography variant="subtitle2" sx={{ height: "13px" }}>{odd}</Typography>
                                                                    <Typography variant="caption">1.5</Typography>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    )}
                                                </Box>
                                            ))
                                        )}
                                    </Box>
                                )
                                )}
                        </Box>
                    </Box>
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
                                    onClick={handleAcceptToggle}
                                />
                                <Typography >Accept any ODDS</Typography>
                            </Box>
                        </Box>
                        {clickBetting && (
                            <>
                                <Box sx={{ display: "flex", justifyContent: "space-between", textAlign: "center", flexWrap: "wrap" }}>
                                    {values.map((val, index) => (
                                        <TextField
                                            key={index}
                                            size="small"
                                            type="number"
                                            value={val}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            inputProps={{ readOnly }}
                                            sx={{ py: 1, m: 1.5, flex: 1 }}
                                        />
                                    ))}
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{ display: "flex", margin: "auto", bgcolor: "#ffc107", color: "black" }}
                                    onClick={() => setReadOnly((prev) => !prev)}
                                >
                                    Edit
                                </Button>
                            </>
                        )}

                    </Paper>
                    <Paper sx={{ borderRadius: 2, overflow: "hidden", bgcolor: "#b2ebf2" }}>
                        {/* Tabs */}
                        <Box display="flex">
                            <Box
                                onClick={() => setSelectedTab("betSlip")}
                                sx={{
                                    flex: 1,
                                    py: 1,
                                    textAlign: "center",
                                    bgcolor: selectedTab === "betSlip" ? "#ffc107" : "#535558",
                                    color: selectedTab === "betSlip" ? "#000" : "#fff",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                <AddIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} />
                                Bet Slip
                            </Box>
                            <Box
                                onClick={() => setBestSliptData((prev) => ({ ...prev, isOpen: false }))
                                }
                                sx={{
                                    flex: 1,
                                    py: 1,
                                    textAlign: "center",
                                    bgcolor: selectedTab === "myBets" ? "#ffc107" : "#535558",
                                    color: selectedTab === "myBets" ? "#000" : "#fff",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                <DescriptionIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} />
                                My Bets
                            </Box>
                        </Box>
                        {bestSliptData.isOpen ? (
                            <Box sx={{ p: 2, bgcolor: bestSliptData.bgcolor, textAlign: "center" }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    England W v India W
                                </Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                                    <Typography>{bestSliptData.label}</Typography>
                                    <Box>
                                        <Typography fontSize="14px" fontWeight={600} color="green">
                                            Profit
                                        </Typography>
                                        <Typography fontSize="14px" fontWeight={600} color="green">
                                            ₹ {profit}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ borderRadius: 1, width: "50%", justifyContent: "space-between", border: "1px solid #000" }}>
                                    <Button size="small" sx={{ minWidth: 24, bgcolor: "#ddd", color: "black", borderRight: "1px solid #000" }}><RemoveIcon /></Button>
                                    <Typography fontWeight={600}>{bestSliptData.odds}</Typography>
                                    <Button size="small" sx={{ minWidth: 24, px: 1, bgcolor: "#ddd", color: "black", borderLeft: "1px solid #000" }}><AddIcon /></Button>
                                </Box>

                                {/* Stake Input */}
                                <Box display="flex" alignItems="center" mt={2} sx={{ borderRadius: 1, border: "1px solid #000" }}>
                                    <Button size="small" sx={{ minWidth: 24, px: 1, bgcolor: "#ddd", color: "black", borderRight: "1px solid #000" }} onClick={decrementStake}><RemoveIcon /></Button>
                                    <TextField
                                        placeholder="Stake"
                                        variant="standard"
                                        value={stake}
                                        onChange={handleStakeChange}
                                        fullWidth
                                        InputProps={{ disableUnderline: true }}
                                        sx={{ mx: 1, input: { textAlign: "center" } }}
                                    />
                                    <Button size="small" sx={{ minWidth: 24, px: 1, bgcolor: "#ddd", color: "black", borderLeft: "1px solid #000" }} onClick={incrementStake}><AddIcon /></Button>
                                </Box>

                                {/* Preset Buttons */}
                                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mt={2}>
                                    {presetAmounts.map((val, idx) => (
                                        <Button
                                            key={idx}
                                            variant="contained"
                                            size="small"
                                            sx={{ bgcolor: "#e0e0e0", color: "#000" }}
                                            onClick={() => handlePresetClick(val)}
                                        >
                                            {val}
                                        </Button>
                                    ))}
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{ gridColumn: "span 3", borderColor: "#000", color: "#000" }}
                                        onClick={clearAll}
                                    >
                                        Clear
                                    </Button>
                                </Box>

                                {/* Action Buttons */}
                                <Box display="flex" justifyContent="space-between" gap={1} mt={2}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ bgcolor: "red", color: "white", fontWeight: 600 }}
                                        onClick={clearAll}
                                    >
                                        CANCEL
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ bgcolor: "green", color: "white", fontWeight: 600 }}
                                        onClick={() => alert(`Placed ₹${stake} bet for odds ${odds}`)}
                                    >
                                        PLACE BET
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ textAlign: "center", py: 4, backgroundColor: "#fff" }}>
                                <Typography>No bets placed in the selected event</Typography>
                            </Box>
                        )}
                    </Paper>
                </Box>
            </Box >

        </Box >
    );
};

export default CommonMatch;
