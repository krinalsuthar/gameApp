import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Paper,
    Link,
    CardMedia,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import CommonNavLink from '../components/commonComponents/CommonNavLink';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [ageConfirmed, setAgeConfirmed] = useState(false);
    const [referralUsed, setReferralUsed] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleRegister = () => {
        if (!ageConfirmed) {
            alert('Please confirm that you are 18+ years old.');
            return;
        }
        console.log('Register clicked');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                            alt={`logo image`}
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

                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Mobile number"
                    variant="outlined"
                    margin="normal"
                    type="tel"
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    margin="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={referralUsed}
                            onChange={(e) => setReferralUsed(e.target.checked)}
                        />
                    }
                    label="Referral Code (Optional)"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            required
                            checked={ageConfirmed}
                            onChange={(e) => setAgeConfirmed(e.target.checked)}
                        />
                    }
                    label={
                        <Typography >
                            We support safe and responsible gambling. Please confirm that you
                            are 18+ years of age.
                        </Typography>
                    }
                    sx={{ alignItems: 'start' }}
                />
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
                >
                    LOGIN WITH DEMO ID
                </Button>
                <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{ mt: 2, fontSize: 13, display: "flex", justifyContent: "center", gap: 0.5 }}
                >
                    Already have an account?
                    <CommonNavLink to={`login`}>
                        LogIn
                    </CommonNavLink>
                </Typography>

            </Paper >
        </Box >
    );
};

export default RegisterPage;
