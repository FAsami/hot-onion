const { makeStyles } = require('@material-ui/core');

export const fooDetailsStyle = makeStyles((theme) => ({
  grid: {
    marginTop: '20px',
  },

  buttonGroup: {
    marginLeft: '20px',
    border: '1px solid black',
    boxShadow: 'none',
    borderRadius: '30px',
  },
  button: {
    border: 'none',
    boxShadow: 'none',
  },
  btnAdd: {
    marginTop: '20px',
    borderRadius: '30px',
    padding: '10px 30px',
  },
}));
