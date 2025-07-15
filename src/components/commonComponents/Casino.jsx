import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import CardHeader from "./CardHeader";
import CommonCard from "./CommonCard";

const Casino = () => {
    const location = useLocation();
    const data = location?.state?.data;

    return (
        <>
            {data?.length > 0 ? (
                data?.map((game, idx) => {
                    const containerRef = useRef(null);
                    return (
                        <Box key={idx}>
                            <CardHeader
                                title={game?.title}
                                scroll="true"
                                containerRef={containerRef}
                                isImage={false}
                                icon={game?.icon}
                                showMoreData={game?.info}
                            />
                            <CommonCard data={game?.info} title={game?.title} containerRef={containerRef} isImage={false} />
                        </Box>
                    );
                })
            ) : (
                <Box sx={{ textAlign: "center", width: "100%" }}>
                    <Typography>No matching games found.</Typography>
                </Box>
            )}
        </>
    );
};

export default Casino;