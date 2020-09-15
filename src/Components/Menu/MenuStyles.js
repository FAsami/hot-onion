import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  link: {
    padding: '20px',
    textDecoration: 'none',
    fontWeight: '800',
    color: '#000000',
  },
  activeLink: {
    padding: '20px',
    textDecoration: 'none',
    fontWeight: '800',
    color: '#EA425C',
    borderBottom: '2px solid #EA425C',
  },
});
