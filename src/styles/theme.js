import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        white: {
            main: '#fff',
            light: 'rgba(224, 224, 224, 0.75)',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        gray: {
            main: '#707B7C',
            light: 'rgba(112, 123, 124, 0.75)',
        },
        black: {
            main: '#000',
        },
        blue: {
            main: '#8CCCF4',
            light: 'rgba(84, 153, 199, 0.65)'
        },
        orange: {
            main: '#F29102',
            light: 'rgba(242, 146, 2, 0.65)',
        },
        red: {
            main: '#FC0404',
        },
        green: {
            main: '#0B5345',
        },
    },
});