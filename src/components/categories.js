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

const mapStateToProps = state => ({
  catReducer: state.catReducer
})

//could also write as one line: 'const mapDispatchToProps = { changeCategory, catChange, reset }
const mapDispatchToProps = dispatch => ({
  changeCategory: (name) => dispatch(changeCategory(name)),
  catChange: (name) => dispatch(catChange(name)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
