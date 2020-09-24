import { makeStyles } from '@material-ui/core';

export const chackOutFormStyle = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },

  link: {
    textDecoration: 'none',
    color: '#EC4849',
  },
}));
