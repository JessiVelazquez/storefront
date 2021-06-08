import React from 'react';
import { connect } from 'react-redux';

import { changeCategory, reset } from '../store/categories.js';
import { catChange } from '../store/products.js';

const Categories = props => {
  console.log('ACTIVE', props.catReducer.activeCategory);
  return (
    <section>
      <h1>Categories</h1>
      <ul>
        {props.catReducer.categories.map(category => {
          return <li onClick={() => props.changeCategory(category.name)}>{category.displayName}</li>
        })}
      </ul>
      <p>Active Category: {props.catReducer.activeCategory}</p>
    </section>
  )
}

// this method needs to be called "mapStateToProps"
// and it does EXACTLY that -> it maps the state of our app (handled in redux) to a prop
// reference: props.counter above -> this is the same as this.state.counter
const mapStateToProps = state => ({
  catReducer: state.catReducer
})

// const mapDispatchToProps = dispatch => { changeCategory, reset }

// the following is the same as the shorthand version above:

const mapDispatchToProps = dispatch => ({
  changeCategory: (name) => dispatch(changeCategory(name)),
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
