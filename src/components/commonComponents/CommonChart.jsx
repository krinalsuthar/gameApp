import React, { useState } from "react";
import Chart from "react-apexcharts";
import {
    Box,
    Typography,
    Select,
    MenuItem,
    IconButton,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";

const CommonChartSwitcher = ({
    lineChartData,
    barChartData,
    inningsList = ["1st INNS", "2nd INNS"],
    defaultInnings = "1st INNS",
    defaultChartType = "line",
}) => {
    const [innings, setInnings] = useState(defaultInnings);
    const [chartType, setChartType] = useState(defaultChartType);

    const options = {
        chart: {
            id: "run-rate-chart",
            toolbar: { show: false },
            background: "transparent",
        },
        theme: {
            mode: "dark",
        },
        xaxis: {
            categories: Array.from({ length: 20 }, (_, i) => i + 1),
            labels: {
                style: { colors: "#bbb", fontSize: "10px" },
            },
        },
        yaxis: {
            min: 0,
            max: 15,
            labels: {
                style: { colors: "#bbb", fontSize: "10px" },
            },
        },
        grid: {
            borderColor: "#333",
            strokeDashArray: 4,
        },
        stroke: { curve: "smooth", width: 2 },
        dataLabels: { enabled: false },
        legend: {
            labels: { colors: "#ccc" },
        },
        colors: ["#00E396", "#FEB019"], // Customize as needed
    };

    const getSeries = () => {
        return chartType === "line"
            ? lineChartData[innings]
            : barChartData[innings];
    };

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                p: 2,
                borderRadius: 2,
                color: "#fff",
                position: "relative",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography><span className="fi fi-bd" style={{ fontSize: "24px" }}></span> Bangladesh</Typography> {/* Bangladesh */}
                </Box>
                <Typography>Sri Lanka <span className="fi fi-lk" style={{ fontSize: "24px" }}></span></Typography> {/* Sri Lanka */}
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography fontWeight="bold" fontSize="12px">RUN RATE</Typography>

                <Box display="flex" alignItems="center" gap={1}>
                    <Select
                        value={innings}
                        onChange={(e) => setInnings(e.target.value)}
                        variant="standard"
                        disableUnderline
                        sx={{
                            color: "#fff",
                            fontSize: "12px",
                            backgroundColor: "#111",
                            borderRadius: 1,
                            px: 1,
                            "& .MuiSvgIcon-root": { color: "#fff" },
                        }}
                    >
                        {inningsList.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>

                    <IconButton onClick={() => setChartType("line")} size="small">
                        <ShowChartIcon sx={{ color: chartType === "line" ? "#fff" : "#888" }} />
                    </IconButton>
                    <IconButton onClick={() => setChartType("bar")} size="small">
                        <BarChartIcon sx={{ color: chartType === "bar" ? "#fff" : "#888" }} />
                    </IconButton>
                </Box>
            </Box>
            <Chart options={options} series={getSeries()} type={chartType} height={200} width={"100%"} />
        </Box>
    );
};

export default CommonChartSwitcher;
