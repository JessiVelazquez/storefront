import React from 'react';
import { connect } from 'react-redux';
import { changeCategory, reset } from '../store/categories.js';
import { catChange } from '../store/products.js';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const Categories = props => {
  return (
    <AppBar color="default" position="static">
      <Tabs>
        {props.catReducer.categories.map(category => {
          return (
            <Button color="primary" onClick={() => props.changeCategory(category.name)}>{category.displayName}</Button>
          )
        })}
      </Tabs>
    </AppBar>
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
