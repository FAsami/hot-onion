import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
  logoLink: {
    marginRight: 'auto',
  },
  logo: {
    height: '30px',
    width: '120px',
  },
  label: {
    textTransform: 'capitalize',
  },
  signInBtn: {
    borderRadius: '25px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textTransform: 'capitalize',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000000',
  },
}));
