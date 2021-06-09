import React from 'react';
import { connect } from 'react-redux';
import { catChange, reset } from '../store/products.js';
import { increment } from '../store/simplecart.js';

function SimpleCart(props) {
  console.log(props.cartReducer.cartList);
  return (
    <section>
      <p>{props.cartReducer.cartItems}</p>
    </section>
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
  increment: (product) => dispatch(increment(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
