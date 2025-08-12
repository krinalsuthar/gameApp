import { createTheme } from '@mui/material/styles';
export const styles = {
    gridContainer: {
        display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' },
        justifyContent: 'space-evenly',
    },
    boxBase: {
        p: '8px 12px',
        borderRadius: '8px',
        transition: 'all 0.3s ease-in-out',
    },
    lightBox: {
        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#f0f0f0',
        },
    },
    darkBox: {
        backgroundColor: '#1e1e1e',
        color: '#f5f5f5',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#2a2a2a',
        },
    },

    lightTypography: {
        fontWeight: 600,
        color: '#222',
        fontSize: '14px',
        textTransform: 'capitalize',
    },
    darkTypography: {
        fontWeight: 600,
        color: '#fff',
        fontSize: '14px',
        textTransform: 'capitalize',
    },
    flexRowCenter: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
};


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            bgWhite: '#ffffff',
        },
        text: {
            textBlack: '#000000',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            bgBlack: '#121212',
        },
        text: {
            textWhite: '#ffffff',
        },
    },
});
