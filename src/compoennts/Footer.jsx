import { Box, CardMedia, Drawer, Link, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { Link as RouterLink } from 'react-router-dom';
import { BhimIcon, DiscortIcon, EmailIcon, FacebookIcon, GPayIcon, InstagramIcon, LinkedInIcon, PaytmIcon, PhonePeIcon, PinterestIcon, TelegramIcon, TelephoneIcon, TwitterIcon, VisaCardIcon, WhatsAppIcon, YouTubeIcon } from '../assets/SVGs/allSVGs';


const imageModules = import.meta.glob('/src/assets/footerImages/footer*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
});
const paymentIcons = [GPayIcon, BhimIcon, PhonePeIcon, PaytmIcon, VisaCardIcon];

const images = Object.values(imageModules);
const footerLinks = ["Sports", "Casino", "Cricket", "Teen Patti", "Andar Bahar", "Roulette", "Promotions", "Live Betting", "Deposit", "Withdraw"];
const socialIcons = [
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YouTubeIcon,
    LinkedInIcon,
    TelegramIcon,
    DiscortIcon,
    WhatsAppIcon,
    PinterestIcon,
    EmailIcon,
    TelephoneIcon
];


const Footer = () => {
    return (
        <Box sx={{ m: "5px 0px", p: 2, bgcolor: "white", margin: "0px 16px", borderRadius: "5px" }}>
            <Box>
                <Link href="#" variant="body2">
                    <CardMedia
                        sx={{ width: "160px" }}
                        component="img"
                        height="25px"
                        image={logo}
                        alt="Logo"
                    />
                </Link>

                <Typography
                    variant="subtitle2"
                    sx={{
                        fontSize: "10px",
                        fontWeight: "600",
                        color: "#535558",
                        mt: 2,
                    }}
                >
                    Gamekhelo.com is Asia's one of the biggest gaming platforms with over
                    350 games and sports available. Popular sports such as Cricket,
                    Tennis, Football, Basketball, Volleyball and many more including
                    Indian card games like Teen Patti and Andar Bahar are also available
                    from various worldwide gaming providers. With unlimited markets and
                    odds, Gamekhelo.com gives players the best gaming experience in the
                    market.
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2, alignItems: "center", justifyContent: "center" }}>
                    {images.map((imgSrc, idx) => (
                        <CardMedia
                            key={idx}
                            component="img"
                            image={imgSrc}
                            alt={`Image ${idx + 1}`}
                            sx={{
                                width: 100,
                                height: 60,
                                objectFit: "contain",
                            }}
                        />
                    ))}
                </Box>
                <Box sx={{ mt: 3, mb: 3 }}>
                    <hr />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 4,
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#ffc600' }}>Quick Link</Typography>
                    {footerLinks.map((item, i) => (
                        <Link
                            key={i}
                            component={RouterLink}
                            to="/common-page"
                            underline="none"
                            sx={{ color: '#535558', display: 'block' }}
                        >
                            <Typography variant="caption">{item}</Typography>
                        </Link>
                    ))}
                </Box>

                <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#ffc600' }}>Info</Typography>
                    <Link component={RouterLink} to="/rules" underline="none" sx={{ color: '#535558' }}>
                        <Typography variant="caption">Rules</Typography>
                    </Link>
                </Box>

                <Box sx={{ maxWidth: 500 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#ffc600' }}>
                        100% Safe & instant payments
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontSize: 10, color: '#535558', mt: 1 }}>
                        You can make payments and receive earnings instantly using your UPI ID or bank account details, ensuring your money is always safe and secure. All major UPI platforms are supported.
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#ffc600', mt: 2 }}>
                        Accepted Modes Of Payments
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap', cursor: "pointer" }}>
                        {paymentIcons.map((Icons, i) => (
                            <Icons />
                        ))}
                    </Box>
                </Box>

                {/* Contact */}
                <Box sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#ffc600' }}>Contact Us</Typography>
                    <Typography sx={{ fontSize: 12, color: '#535558', mt: 1 }}>+16616752327</Typography>
                    <Typography sx={{ fontSize: 12, color: '#535558' }}>support@gamekhelo.com</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap', cursor: "pointer" }}>
                        {socialIcons.map((Icons, i) => (
                            <Icons />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
