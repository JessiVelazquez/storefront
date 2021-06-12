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
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
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
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                      {product.price}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            // <ul>{product.name}: ${product.price}</ul>
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
