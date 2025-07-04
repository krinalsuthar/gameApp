import React, { useState } from 'react';
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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../assets/logo.png"
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BestSoultionIcon } from '../assets/SVGs/allSVGs';


const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login clicked');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
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
                    <Link component={RouterLink} to="/" underline="none" sx={{ color: '#535558' }}>
                        <CardMedia
                            component="img"
                            image={logo}
                            alt={`logo image`}
                            sx={{
                                width: 160,
                                height: 35,
                                objectFit: "contain",
                                margin: "auto"
                            }}
                        />
                    </Link>
                </Typography>

                <form onSubmit={handleLogin}>
                    <TextField
                        label="user Name"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                    />

                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        required
                        margin="normal"
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
                        sx={{ mt: 3, py: 1.2, bgcolor: "#ffc107", color: "black" }}
                        onClick={() => dispatch(login())}
                    >
                        Login
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3, py: 1.2, bgcolor: "#ffc107", color: "black" }}
                    >
                        Login With Demo Id
                    </Button>
                </form>

                <Box sx={{ textAlign: 'right', mt: 2, textAlignLast: "center" }}>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Box>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="body2">
                        Don't have an account?{' '}
                        <Link href="#" variant="body2">
                            Register
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default LogInPage;
