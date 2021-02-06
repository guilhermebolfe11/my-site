import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ECEFF1',
    },
    secondary: {
      main: '#37474F',
    },
    error: {
      main: '#db5858',
    },
    warning: {
      main: '#f79633',
    },
    success: {
      main: '#5fa463',
    },
    info: {
      main: '#35baf6',
    },
    divider: '#424242',
  },
  typography: {
    fontFamily: ['-apple-system', 'Roboto Slab', 'Roboto', 'serif'].join(','),
  },
  overrides: {
    MuiInputBase: {
      root: {
        color: '#ECEFF1',
      },
    },
    MuiTypography: {
      h3: {
        fontFamily: 'Nunito',
      },
    },
    MuiCard: {
      root: {
        backgroundColor: '#ECEFF1',
      },
    },
    MuiCardHeader: {
      root: {
        fontFamily: 'JetBrains Mono',
      },
    },
    MuiCardContent: {
      root: {
        overflowY: 'auto',
        listStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
