const { makeStyles } = require('@material-ui/core');

export const signUpformStyle = makeStyles((theme) => ({
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
    cursor: 'pointer',
  },
}));
