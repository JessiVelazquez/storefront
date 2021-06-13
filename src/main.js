import React from 'react';
import './styles/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from './components/categories.js';
import Products from './components/products.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import SimpleCart from './components/simplecart.js';
import Details from './components/prodDetails.js';
import App from './app.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#c7e6f0',
    width: '100%',
  }
}));


function Main() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Header />
      <App className={classes.root} />
      <Footer id="footer"/>
    </BrowserRouter>
  )
}

export default Main;