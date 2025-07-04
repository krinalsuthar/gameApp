import { Box, Grid, Link, TextField, Typography } from "@mui/material"
import { LeftArrowIcon, BoldFireIcon, RightArrowIcon } from "../../assets/SVGs/allSVGs"

const CardHeader = (
    { searchTerm = "",
        handleSearchChange = "",
        search = "false",
        title = "",
        scroll = "false",
        icon = "" }
) => {
    return (
        <>
            <Grid container sx={{ flexWrap: "wrap", }}>
                <Grid
                    item
                    sx={{
                        p: "5px 10px", m: "5px 0px", bgcolor: "white",
                        flexWrap: "wrap",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                        mb: 2,
                        borderRadius: "5px"
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {icon}
                        <Typography variant="h6">{title}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Link href="/common-page" variant="body2">
                            Show more
                        </Link>
                        {search == "true" && (
                            <TextField
                                size="small"
                                label="Search games"
                                variant="outlined"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        )}
                        {scroll == "true" && (
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    bgcolor: "#ffc107",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "5px",
                                    borderRadius: "5px", border: "1px solid black"
                                }}
                            >
                                <LeftArrowIcon />
                                <Box
                                    sx={{
                                        width: "1px",
                                        height: "24px",
                                        backgroundColor: "#000",
                                        mx: 1,
                                    }}
                                />
                                <RightArrowIcon />
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default CardHeader