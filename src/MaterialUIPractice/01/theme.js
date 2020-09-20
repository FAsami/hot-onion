import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '30px',
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: 'none',
      },
    },
  },
});
