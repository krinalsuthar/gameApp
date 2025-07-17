import { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    Paper,
    CardMedia,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import CommonNavLink from '../components/commonComponents/CommonNavLink';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/drawer/authSlice';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        password: '',
    });
    const [referralUsed, setReferralUsed] = useState(false);
    const [ageConfirmed, setAgeConfirmed] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const validate = () => {
        let errors = {};
        if (!formData.username.trim()) errors.username = 'Username is required';
        if (!formData.mobile.trim()) errors.mobile = 'Mobile number is required';
        if (!formData.password.trim()) errors.password = 'Password is required';
        if (!ageConfirmed) errors.ageConfirmed = 'You must confirm age 18+';
        return errors;
    };

    const handleRegister = () => {
        const errors = validate();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const exists = users.find((u) => u.username === formData.username);

        if (exists) {
            alert('User already exists!');
            return;
        }

        const newUser = {
            ...formData,
            referralUsed,
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');
        navigate('/login');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: '#f5f5f5',
                px: 2
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    p: 3,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
                    <CommonNavLink to={''} sx={{ color: '#535558' }}>
                        <CardMedia
                            component="img"
                            image={logo}
                            alt="logo image"
                            sx={{
                                width: 160,
                                height: 35,
                                objectFit: "contain",
                                margin: "auto"
                            }}
                        />
                    </CommonNavLink>
                </Typography>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        bgcolor: '#25D366',
                        color: 'white',
                        fontWeight: 600,
                        mb: 2,
                        '&:hover': { bgcolor: '#20b157' },
                    }}
                    startIcon={<WhatsAppIcon />}
                >
                    WhatsApp Now
                </Button>

                {/* Username */}
                <FormControl fullWidth margin="normal" error={!!formErrors.username}>
                    <TextField
                        label="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        error={!!formErrors.username}
                    />
                    {formErrors.username && <FormHelperText>{formErrors.username}</FormHelperText>}
                </FormControl>

                {/* Mobile */}
                <FormControl fullWidth margin="normal" error={!!formErrors.mobile}>
                    <TextField
                        label="Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        type="tel"
                        error={!!formErrors.mobile}
                    />
                    {formErrors.mobile && <FormHelperText>{formErrors.mobile}</FormHelperText>}
                </FormControl>

                {/* Password */}
                <FormControl fullWidth margin="normal" error={!!formErrors.password}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    {formErrors.password && <FormHelperText>{formErrors.password}</FormHelperText>}
                </FormControl>

                {/* Referral Checkbox */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={referralUsed}
                            onChange={(e) => setReferralUsed(e.target.checked)}
                        />
                    }
                    label="Referral Code (Optional)"
                />

                {/* Age Confirmation Checkbox */}
                <FormControl error={!!formErrors.ageConfirmed} sx={{ mt: 1 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ageConfirmed}
                                onChange={(e) => setAgeConfirmed(e.target.checked)}
                                required
                            />
                        }
                        label={
                            <Typography fontSize={13}>
                                We support safe and responsible gambling. Please confirm that you are 18+ years of age.
                            </Typography>
                        }
                        sx={{ alignItems: 'start' }}
                    />
                    {formErrors.ageConfirmed && <FormHelperText>{formErrors.ageConfirmed}</FormHelperText>}
                </FormControl>

                {/* Register Button */}
                <Button
                    fullWidth
                    onClick={handleRegister}
                    variant="contained"
                    sx={{
                        mt: 2,
                        py: 1,
                        bgcolor: '#ffc107',
                        color: 'black',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e6b800' },
                    }}
                >
                    REGISTER
                </Button>

                {/* Demo Login Button */}
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 1.5,
                        py: 1,
                        bgcolor: '#ffc107',
                        color: 'black',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e6b800' },
                    }}
                    onClick={() => {
                        const demoUser = {
                            username: 'demo',
                            password: 'demo123'
                        };
                        // Optionally save token for demo login
                        localStorage.setItem('token', 'demo-token');
                        // Update redux auth state
                        dispatch(login(demoUser));
                        // Redirect
                        navigate('/');
                    }}
                >
                    LOGIN WITH DEMO ID
                </Button>

                {/* Already have account */}
                <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{ mt: 2, fontSize: 13, display: "flex", justifyContent: "center", gap: 0.5 }}
                >
                    Already have an account?
                    <CommonNavLink to="login">LogIn</CommonNavLink>
                </Typography>
            </Paper>
        </Box>
    );
};

export default RegisterPage;
