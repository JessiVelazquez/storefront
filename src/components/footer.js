import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   marginTop: 300,
  // },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer id="footer" className={classes.root}>
      <p>(c) Jessi V, 2021</p>
    </footer>
  )
}

export default Footer;