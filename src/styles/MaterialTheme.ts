import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: 'rgba(245, 245, 245, 1)',
      main: 'rgb(97, 97, 97)',
      dark: 'rgb(33, 33, 33)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      light: 'rgba(144, 201, 249, 1)',
      main: 'rgb(30, 136, 229)',
      dark: 'rgb(13, 71, 161)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    error: {
      light: 'rgba(225, 154, 156, 1)',
      main: 'rgba(223, 74, 66, 1)',
      dark: 'rgba(177, 52, 51, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.42)',
      hint: 'rgba(0, 0, 0, 0.38)',
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
    fontFamily: ['Roboto Mono', 'serif'].join(','),
    subtitle1: {
      fontFamily: ['JetBrains Mono', 'serif'].join(','),
    },
    caption: {
      fontFamily: ['JetBrains Mono', 'serif'].join(','),
    },
  },
  overrides: {
    MuiLink: {
      root: {
        margin: 5,
      },
    },
    MuiCardContent: {
      root: {
        overflowY: 'auto',
        listStyle: 'none',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: '#424242',
        },
      },
    },
    MuiList: {
      root: {
        overflowY: 'auto',
        listStyle: 'none',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: '#424242',
        },
      },
    },
    MuiListItemText: {
      secondary: {
        fontFamily: 'JetBrains Mono',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
