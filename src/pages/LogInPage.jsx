import { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    CardMedia,
    FormControlLabel,
    Switch,
    FormControl,
    FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import CommonNavLink from '../components/commonComponents/CommonNavLink';
import { useDispatch } from 'react-redux';
import { login } from '../features/drawer/authSlice';

const LogInPage = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleTogglePassword = () => setShowPassword(!showPassword);
    const validate = () => {
        let temp = {};
        if (!formData.username.trim()) temp.username = 'Username is required';
        if (!formData.password.trim()) temp.password = 'Password is required';
        return temp;
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const match = users.find(
            (u) =>
                u.username === formData.username &&
                u.password === formData.password
        );
        if (match) {
            const token = 'mock-jwt-token-' + Date.now();
            if (rememberMe) {
                localStorage.setItem('token', token);
            } else {
                sessionStorage.setItem('token', token);
            }
            dispatch(login());
            alert('Login successful!');
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
        console.log("🚀 ~ handleLogin ~ login:", login)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                p: 2,
                bgcolor: "#f5f5f5"
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    maxWidth: 500,
                    width: '100%',
                    p: 4,
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

                <form onSubmit={handleLogin}>
                    <FormControl fullWidth margin="normal" error={!!errors.username}>
                        <TextField
                            label="Username"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({ ...formData, username: e.target.value })
                            }
                            error={!!errors.username}
                        />
                        {errors.username && (
                            <FormHelperText>{errors.username}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth margin="normal" error={!!errors.password}>
                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            error={!!errors.password}
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
                        {errors.password && (
                            <FormHelperText>{errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControlLabel
                        control={
                            <Switch
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 3,
                            py: 1.2,
                            bgcolor: "#ffc107",
                            color: "black",
                            fontWeight: 700,
                            '&:hover': { bgcolor: "#e6b800" }
                        }}
                    >
                        Login
                    </Button>

                    <Button
                        type="button"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2,
                            py: 1.2,
                            bgcolor: "#ffc107",
                            color: "black",
                            fontWeight: 700,
                            '&:hover': { bgcolor: "#e6b800" }
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
                        Login With Demo ID
                    </Button>
                </form>

                <Box sx={{ textAlign: 'right', mt: 2, textAlignLast: "center" }}>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Box>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="body2">
                        Don&apos;t have an account?{' '}
                        <CommonNavLink to={'register'}>
                            Register
                        </CommonNavLink>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default LogInPage;
