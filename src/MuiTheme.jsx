import { createTheme } from '@mui/material/styles';
import Colors from './Colors';

export const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&::after': {
          borderBottom: '2px solid #E1B653',
          }
        },
      },
    },
    MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: '#FFFFFF',
          },
          contained: {
            color: Colors.secondary,
            border: '0.5px solid',
            borderColor: Colors.navbar,
            backgroundColor: Colors.primary,
            transition: '0.7s', 
            '&:hover': { 
              background: Colors.primary,
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
              transition: '0.7s', 
            },
            '&:focus': { background: Colors.primary },
            borderRadius: '4px',
          },
        },
      },
  },
});

export const newtheme = createTheme({
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontSize: '96px',
        color: Colors.brownLight,
      },
      h3: {
        fontSize: '48px',
        color: Colors.brownLight,
      },
      h4: {
        fontSize: '34px',
        color: Colors.brownLight,
      },
      h5: {
        fontSize: '24px',
        color: Colors.brownLight,
      },
      body1: {
        fontSize: '16px',
        color: Colors.brownDark,
      },
      body2: {
        fontSize: '14px',
        color: Colors.brownDark,
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: Colors.greenLight,
          },
          colorSecondary: {
            backgroundColor: Colors.blueLight,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            color: '#FFFFFF',
          },
          contained: {
            background: Colors.greenLight,
            '&:hover': { background: Colors.greenDark },
            '&:focus': { background: Colors.greenDark },
            boxShadow:
              '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
            variants: [
              {
                props: { size: 'large' },
                style: {
                  fontSize: '15px',
                  height: '42px',
                },
              },
              {
                props: { size: 'medium' },
                style: {
                  fontSize: '14px',
                  height: '36px',
                },
              },
            ],
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: Colors.brownLight,
            },
            '& label.Mui-focused': {
              color: Colors.greenDark,
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#ffffff',
              color: Colors.brownLight,
              '& fieldset': {
                borderColor: Colors.brownLight,
              },
              '&:hover fieldset': {
                borderColor: Colors.brownLight,
              },
              '&.Mui-focused fieldset': {
                borderColor: Colors.greenLight,
              },
            },
            input: {
              color: Colors.brownLight,
              '&:placeholder': {
                color: Colors.brownDark,
              },
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            textAlign: 'center',
          },
        },
      },
    },
  });

//   export default theme;

