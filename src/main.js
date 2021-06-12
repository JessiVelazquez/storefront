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


function Main() {

  return (
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  )
}

export default Main;