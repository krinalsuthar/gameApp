import { useState } from 'react';
import {
    Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText,
    IconButton, InputAdornment, InputLabel, OutlinedInput, TextField,
    Typography, Paper, CardMedia, Alert, Snackbar
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import CommonNavLink from '../components/commonComponents/CommonNavLink';
import { useNavigate } from 'react-router-dom';
import { encryptData } from '../utils/cryptoUtils';
import { connectSocket } from '../utils/socketClient';
import { validateRegisterForm } from '../utils/validate';
import api from "../api/apiClient.js";
import { registerUserApi } from '../api/authApi.js';
import { getRandomString } from '../utils/common.js';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: "", mobile: "", password: "" });
    const [referralUsed, setReferralUsed] = useState(false);
    const [ageConfirmed, setAgeConfirmed] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [toastText, setToastText] = useState({ text: "", color: "" });

    const handleTogglePassword = () => setShowPassword(!showPassword);
    const handleClose = (_, reason) => { if (reason !== "clickaway") setOpen(false); };

    const handleRegister = async () => {
        const errors = validateRegisterForm({ ...formData, ageConfirmed });
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;

        try {

            const token = "jwt-" + getRandomString(12);
            const res = await registerUserApi({
                username: formData.username,
                mobile: formData.mobile,
                password: formData.password,
                token
                // referralUsed
            });

            if (res.status) {
                localStorage.setItem("token", encryptData(res.token));
                connectSocket();
                setToastText({ text: "Registration successful! ✅", color: "success" });
                setOpen(true);
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setToastText({ text: res.message || "Registration failed", color: "error" });
                setOpen(true);
            }
        } catch (err) {
            console.error(err);
            setToastText({ text: "Error registering", color: "error" });
            setOpen(true);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', px: 2 }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={toastText.color} variant="filled">{toastText.text}</Alert>
            </Snackbar>

            <Paper elevation={6} sx={{ width: '100%', maxWidth: 500, p: 3, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
                    <CommonNavLink to={''}><CardMedia component="img" image={logo} alt="logo" sx={{ width: 160, height: 35, objectFit: "contain", margin: "auto" }} /></CommonNavLink>
                </Typography>

                <Button fullWidth variant="contained" sx={{ bgcolor: '#25D366', color: 'white', fontWeight: 600, mb: 2, '&:hover': { bgcolor: '#20b157' } }} startIcon={<WhatsAppIcon />}>
                    WhatsApp Now
                </Button>

                <FormControl fullWidth margin="normal" error={!!formErrors.username}>
                    <TextField label="Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                    {formErrors.username && <FormHelperText>{formErrors.username}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!formErrors.mobile}>
                    <TextField label="Mobile Number" type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                    {formErrors.mobile && <FormHelperText>{formErrors.mobile}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!formErrors.password}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        endAdornment={<InputAdornment position="end"><IconButton onClick={handleTogglePassword} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>}
                        label="Password"
                    />
                    {formErrors.password && <FormHelperText>{formErrors.password}</FormHelperText>}
                </FormControl>

                <FormControlLabel control={<Checkbox checked={referralUsed} onChange={(e) => setReferralUsed(e.target.checked)} />} label="Referral Code (Optional)" />

                <FormControl error={!!formErrors.ageConfirmed} sx={{ mt: 1 }}>
                    <FormControlLabel control={<Checkbox checked={ageConfirmed} onChange={(e) => setAgeConfirmed(e.target.checked)} required />} label={<Typography fontSize={13}>Please confirm that you are 18+ years of age.</Typography>} sx={{ alignItems: 'start' }} />
                    {formErrors.ageConfirmed && <FormHelperText>{formErrors.ageConfirmed}</FormHelperText>}
                </FormControl>

                <Button fullWidth onClick={handleRegister} variant="contained" sx={{ mt: 2, py: 1, bgcolor: '#ffc107', color: 'black', fontWeight: 700, '&:hover': { bgcolor: '#e6b800' } }}>REGISTER</Button>

                <Typography variant="body2" textAlign="center" sx={{ mt: 2, fontSize: 13, display: "flex", justifyContent: "center", gap: 0.5 }}>
                    Already have an account? <CommonNavLink to="login">LogIn</CommonNavLink>
                </Typography>
            </Paper>
        </Box>
    );
};

export default RegisterPage;
