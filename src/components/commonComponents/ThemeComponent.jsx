// ThemeComponent.jsx
import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const useAppTheme = () => useContext(ThemeContext);

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: { default: '#ffffff', secondery: "#f5f5f5de" },
        text: { primary: '#000000' },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#121212', secondery: "#000000" },
        text: { primary: '#ffffff' },
    },
});

export const AppThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
