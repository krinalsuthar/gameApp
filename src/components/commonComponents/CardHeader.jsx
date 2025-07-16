import { Box, CardMedia, Grid, TextField, Typography } from "@mui/material"
import { LeftArrowIcon, RightArrowIcon } from "../../assets/SVGs/allSVGs"
import CommonNavLink from "./CommonNavLink"

const CardHeader = (
    {
        searchTerm = "",
        handleSearchChange = "",
        search = "false",
        title = "",
        scroll = "false",
        icon = "",
        containerRef = "",
        isImage = "true",
        showMore = "true",
        count = "",
        showMoreData = ""
    }
) => {
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -161,
                behavior: 'smooth',
            });
        }
    };
    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 161,
                behavior: 'smooth',
            });
        }
    };

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
                        {isImage ? (
                            icon
                        ) : (
                            <Box>
                                <CardMedia
                                    component="img"
                                    image={icon} alt="Logo"
                                    height={"20px"}
                                    width={"20px"}
                                />
                            </Box>
                        )}
                        <Typography variant="h6">{title}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center", cursor: "pointer" }}>
                        {showMore ? (
                            <CommonNavLink to={`show-more`}
                                item={{
                                    data: "item.title",
                                    info: showMoreData,
                                    icon: "",
                                    isHeader: false,
                                    isScroll: false
                                }}
                                variant="body2">
                                Show more
                            </CommonNavLink>
                        ) : (
                            <Typography variant="caption">{count} results</Typography>
                        )}
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
                                <Box onClick={scrollLeft}
                                    sx={{ display: "flex" }}
                                >

                                    <LeftArrowIcon />
                                </Box>
                                <Box

                                    sx={{
                                        width: "1px",
                                        height: "24px",
                                        backgroundColor: "#000",
                                        mx: 1,
                                    }}
                                />
                                <Box onClick={scrollRight} sx={{ display: "flex" }}
                                >
                                    <RightArrowIcon />
                                </Box>
                            </Box>
                        )}
                    </Box >
                </Grid >
            </Grid >
        </>
    )
}

export default CardHeader

