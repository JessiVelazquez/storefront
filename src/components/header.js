import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCart from './simplecart.js';
import { addItem, increment } from '../store/simplecart.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography id="headerTitle" variant="h6" className={classes.title}>
            Hot Threads
          </Typography>
          <NavLink to="/cart" id="cartButton" color="inherit">Cart({props.cartReducer.cartList.length})</NavLink>
          <Button color="inherit">
          <NavLink to=''>Home</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset()),
  increment: (product) => dispatch(increment(product)),
  addItem: (product) => dispatch(addItem(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


