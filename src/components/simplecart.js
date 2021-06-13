import React from 'react';
import { connect } from 'react-redux';
import { catChange, reset } from '../store/products.js';
import { addItem } from '../store/simplecart.js';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: 155,
    maxWidth: '36ch',
    background: 'linear-gradient(45deg, #ff9cb1 30%, #ffd2ba 90%)',
    zIndex: 1000,
    borderWidth: 1.5,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 10,
    paddingLeft: 5,
  },
  inline: {
    display: 'inline',
  },
  cartText: {
    fontSize: 10,
  }
}));

function SimpleCart(props) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
        Items in Cart:
        {props.cartReducer.cartList.map(product => {
          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={product.image}/>
              </ListItemAvatar>
              <ListItemText
                className={classes.cartText}
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                      ${product.price}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          )
        })}
      </List>
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
