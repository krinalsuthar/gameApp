import { Box, Button, CardMedia, Typography } from "@mui/material"
import refer from "../../assets/referimage.png"
import { Link, useLocation } from "react-router-dom"
import * as allImages from "../../assets"
import React from "react"
const images = [
    allImages.promotion1,
    allImages.promotion2,
    allImages.promotion3,
    allImages.promotion4,
    allImages.promotion5
]
const PromotionRefer = () => {
    const location = useLocation();
    const promotion = location?.state?.data;
    return (
        <>
            {promotion ? (
                <>
                    <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", mb: 2 }}>
                        <Typography variant="h5">PROMOTIONS</Typography>
                    </Box>
                    <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", mb: 2 }}>
                        <Typography variant="h5">We regret to inform you that no promotions are currently available.</Typography>
                        <Typography variant="subtitle2">However, we encourage you to stay connected with us.We are constantly working to provide you with the best promotions tailored just for you.</Typography>
                    </Box>
                </>
            ) : (
                <>
                    <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", display: "flex", flexWrap: { lg: "nowrap", md: "nowrap", sm: "nowrap", xs: "wrap" }, justifyContent: "center" }}>
                        <Box>
                            <CardMedia
                                component="img"
                                image={refer}
                                alt="Logo"
                            /></Box>
                        <Box maxWidth={500} sx={{ margin: "auto" }}>
                            <Typography variant="h3">Refer and Earn</Typography>
                            <Typography sx={{ my: 3 }}>Invite your friends and family to join the Gamekhelo community and enjoy exclusive rewards! Earn +++ bonus for every successful referral!</Typography>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ p: "5px 60px", bgcolor: "#ffc107", color: "black", fontWeight: 600 }}
                            >
                                refer & Earn
                            </Button>
                            <Box mt={2}>
                                {/* CommonNavLink used remain */}
                                <Link href="/common-page" variant="body2">
                                    Show more
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: 'white',
                            textAlign: 'center',
                            p: 3,
                            borderRadius: '5px',
                            my: 2,
                        }}
                    >
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            How it works
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-around',
                                gap: 3,
                            }}
                        >
                            {[{
                                img: allImages.link,
                                title: "Get your invite link",
                                desc: "Generate your unique invite link to start inviting friends."
                            }, {
                                img: allImages.email,
                                title: "Invite your friends",
                                desc: "Share your invite link with friends. And make sure they complete registration on Gamekhelo."
                            }, {
                                img: allImages.coinIcon,
                                title: "Get credits + prizes",
                                desc: "Earn cashback directly to your bonus or main wallet when your friend joins Gamekhelo and/or makes their first payment."
                            }].map((step, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        flex: 1,               // Ensures equal width in row layout
                                        maxWidth: 300,         // Limits box width for large screens
                                        textAlign: 'center',   // Keeps everything centered
                                        mx: 'auto',            // Horizontally center on column layout
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        src={step.img}
                                        alt={step.title}
                                        sx={{ width: 50, height: 50, mx: 'auto', mb: 1 }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        {step.title}
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        {step.desc.split("Gamekhelo").map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i !== arr.length - 1 && <strong>Gamekhelo</strong>}
                                            </React.Fragment>
                                        ))}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ bgcolor: "white", textAlign: "center", p: 3, borderRadius: "5px", mb: 2 }}>
                        <Typography variant="h5">Invite & Ignite: Claim Your Bonus Today!</Typography>
                        <Typography variant="subtitle2">Refer and Earn Bonus Not Available Currently.</Typography>
                    </Box>
                </>
            )}
        </>
    )
}

export default PromotionRefer