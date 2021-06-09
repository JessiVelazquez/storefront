import React from 'react';
import './styles/style.scss';

import Categories from './components/categories.js';
import Products from './components/products.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import SimpleCart from './components/simplecart.js';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </>
  )
}

export default App;