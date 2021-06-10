import React from 'react';
import { connect } from 'react-redux';
import { catChange, reset } from '../store/products.js';
import { addItem } from '../store/simplecart.js';

function SimpleCart(props) {
  console.log('LIST--', props.cartReducer.cartList);
  return (
    <>
      <h3>Items in Cart:</h3>
      <div>
        {props.cartReducer.cartList.map(product => {
          return (
            <ul>{product.name}: ${product.price}</ul>
          )
        })}
      </div>
    </>
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
  addItem: (product) => dispatch(addItem(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
