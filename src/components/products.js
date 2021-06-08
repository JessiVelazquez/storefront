import React from 'react';
import { connect } from 'react-redux';

import { catChange, reset } from '../store/products.js';

const Products = props => {
  console.log('PROD---', props.prodReducer);
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {props.prodReducer.products.map(product => {
          if (product.categoryAss === props.catReducer.activeCategory)
          return (
            <li>{product.name}</li>
          )
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer
})

const mapDispatchToProps = dispatch => ({
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
