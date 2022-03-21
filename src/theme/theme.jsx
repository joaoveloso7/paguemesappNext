import { createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {   
            main: '#181C29'
        },
        secondary:{
            main: '#FC5050',
        },
        background: {
            default: '#111219'
        },
        text: {
            primary: '#F8F8F8',
            secondary: '#9B9EAE'
        },
        success:{
            main: '#50FC61'
        },
        error: {
            main: red.A400,
        },
    },  
    overrides: {
        MuiAppBar: {
          colorInherit: {
            backgroundColor: '#689f38',
            color: '#fff',
          },
        },
      },
      props: {
        MuiAppBar: {
          color: 'inherit',
        },
      },
    typography: {
      fontFamily: 'Rubik, sans-serif',
    },
    
});

export default theme;