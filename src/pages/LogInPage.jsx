import { useState } from 'react';
import {
    Box, Paper, Typography, FormControl, TextField, FormHelperText,
    InputAdornment, IconButton, Button, Snackbar, Alert, Switch, FormControlLabel, CardMedia
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import CommonNavLink from '../components/commonComponents/CommonNavLink';
import { useDispatch } from 'react-redux';
import { login } from '../features/drawer/authSlice';
import { loginUserApi } from '../api/authApi.js';
import { validateLoginForm } from '../utils/validate'; // Changed to validateLoginForm
import { encryptData } from '../utils/cryptoUtils';
import { connectSocket } from '../utils/socketClient';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [open, setOpen] = useState(false);
    const [toastText, setToastText] = useState({ text: '', color: '' });

    const handleTogglePassword = () => setShowPassword(!showPassword);
    const handleClose = (_, reason) => { if (reason !== 'clickaway') setOpen(false); };

    const handleLogin = async () => {
        const errors = validateLoginForm(formData); // Use validateLoginForm
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;

        try {
            const res = await loginUserApi(formData.username, formData.password);
            if (res.status) {
                const token = encryptData(res.token);
                if (rememberMe) {
                    localStorage.setItem('token', token);
                } else {
                    sessionStorage.setItem('token', token);
                }
                sessionStorage.setItem('username', formData.username);
                dispatch(login(formData));
                connectSocket();
                setToastText({ text: 'Login successful! ✅🔓', color: 'success' });
                setOpen(true);
                setTimeout(() => navigate('/'), 2000);
            } else {
                setToastText({ text: res.message || 'Login failed', color: 'error' });
                setOpen(true);
            }
        } catch (err) {
            console.error(err);
            setToastText({ text: 'Error logging in', color: 'error' });
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
                    <CommonNavLink to={''}>
                        <CardMedia
                            component="img"
                            image={logo}
                            alt="logo"
                            sx={{ width: 160, height: 35, objectFit: 'contain', margin: 'auto' }}
                        />
                    </CommonNavLink>
                </Typography>

                <Button fullWidth variant="contained" sx={{ bgcolor: '#25D366', color: 'white', fontWeight: 600, mb: 2, '&:hover': { bgcolor: '#20b157' } }} startIcon={<WhatsAppIcon />}>
                    WhatsApp Now
                </Button>

                <FormControl fullWidth margin="normal" error={!!formErrors.username}>
                    <TextField
                        label="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    {formErrors.username && <FormHelperText>{formErrors.username}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!formErrors.password}>
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formErrors.password && <FormHelperText>{formErrors.password}</FormHelperText>}
                </FormControl>

                <FormControlLabel
                    control={<Switch checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} color="primary" />}
                    label="Remember me"
                    sx={{ mt: 1 }}
                />

                <Button
                    onClick={handleLogin}
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, py: 1, bgcolor: '#ffc107', color: 'black', fontWeight: 700, '&:hover': { bgcolor: '#e6b800' } }}
                >
                    LOGIN
                </Button>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, py: 1, bgcolor: '#ffc107', color: 'black', fontWeight: 700, '&:hover': { bgcolor: '#e6b800' } }}
                    onClick={() => {
                        const demoUser = { username: 'demo', password: 'demo123' };
                        localStorage.setItem('token', 'demo-token');
                        sessionStorage.setItem('username', demoUser.username);
                        dispatch(login(demoUser));
                        navigate('/');
                    }}
                >
                    Login With Demo ID
                </Button>

                <Typography variant="body2" textAlign="center" sx={{ mt: 2, fontSize: 13, display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                    Don&apos;t have an account? <CommonNavLink to="register">Register</CommonNavLink>
                </Typography>
            </Paper>
        </Box>
    );
};

export default LoginPage;

export const LoginDeposit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { data } = state || {};

    return (
        <Paper
            elevation={6}
            sx={{
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                maxWidth: 500,
                mx: 'auto',
                mt: 4
            }}
        >
            <Typography variant="body1" fontWeight={400} mb={2}>
                For {data || 'access'} Please <strong>LOGIN OR REGISTER</strong> From Real User
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                    variant="contained"
                    onClick={() => navigate('/login')}
                    sx={{
                        bgcolor: '#ffc107',
                        color: 'black',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e6b800' },
                    }}
                >
                    LOGIN
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/register')}
                    sx={{
                        bgcolor: '#ffc107',
                        color: 'black',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e6b800' },
                    }}
                >
                    REGISTER
                </Button>
            </Box>
        </Paper>
    );
};