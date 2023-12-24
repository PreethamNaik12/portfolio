import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const primary = {
    main: '#212121',
    light: '#42a5f5',
    dark: '#212121',
    contrastText: '#fff',
    chat: '#32293a',
};

const secondary = {
    main: green[500],
};

const tertiary = {
    main: '#ffffff',
    dark: '#ffffff',
    contrastText: '#000',
}


const theme = createTheme({
    palette: {
        primary,
        secondary,
        tertiary,
    },
    typography: {
        fontFamily: ['Gabarito', 'serif'].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        // You can add more typography options for other elements as needed
    },
});

export default theme;