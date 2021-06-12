import React from 'react';
import { connect } from 'react-redux';
import './styles/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from './components/categories.js';
import Products from './components/products.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import SimpleCart from './components/simplecart.js';
import Details from './components/prodDetails.js';

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Categories />
          <SimpleCart />
          <Products />
        </Route>
        <Route 
          exact 
          path={`/details/:${props.prodReducer._id}`}
          component={(props) => <Details {...props} />}
          >
        </Route>
      </Switch>
    </>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
  detailReducer: state.detailReducer
})

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  reset: () => dispatch(reset()),
  addItem: (product) => dispatch(addItem(product)),
  selectedProduct: (product) => dispatch(selectedProduct(product)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
