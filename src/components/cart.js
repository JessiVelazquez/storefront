import React from 'react';
import { connect } from 'react-redux';
import { catChange, reset } from '../store/products.js';
import { addItem, remove } from '../store/simplecart.js';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'transparent',
    marginLeft: 100,
  },
  inline: {
    display: 'inline',
    marginRight: 120,
  },
  cart: {
    background: 'linear-gradient(45deg, #ff9cb1 30%, #ffd2ba 90%)',
    margin: 100,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: 200,
  },
  total: {
    marginLeft: 100,
  },
  button: {
    marginLeft: 0,
    paddingLeft: 25,
    paddingRight: 25,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderWidth: 1.5,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  item: {
    width: 500,
  },
  form: {
    padding: 30,
  },
  orderButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderWidth: 1.5,
    borderColor: 'white',
    borderStyle: 'solid',
    padding: 10,
    marginLeft: 30,
    marginTop: 15,
  }
}));

function SimpleCart(props) {

  function totalCost(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      let number = parseInt(arr[i].price);
      total = total + number;
    }
    return total;
  }

  let cartTotal = totalCost(props.cartReducer.cartList);

  const classes = useStyles();
  return (
    <>
      <List className={classes.cart}>
        <List className={classes.root}>
          Items in Cart:
          {props.cartReducer.cartList.map(product => {
            return (
              <ListItem className={classes.item} alignItems="flex-start">
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
                        ${product.price}.00
                      </Typography>
                      <Button className={classes.button} onClick={() => props.remove(product)} size="small">
                        Remove
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
            )
          })}
        </List>
        <List className={classes.total}>Total Cost: ${cartTotal}.00</List>
        <form className={classes.form} noValidate autoComplete="off">
            <div>
              <Typography variant="h5" component="h2">
                Billing Info
              </Typography>
              <TextField required id="standard-required" label="Full Name"/>
              <TextField
                id="standard-address-input"
                label="Address"
                type="address"
                autoComplete="current-address"
              />
              <TextField
                id="standard-read-only-input"
                label="City"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="standard-state-input"
                label="State"
              />
              <TextField id="standard-search" label="Zip Code" />
              <TextField
                id="standard-credit-card"
                label="Credit Card #"
              />
                <TextField
                id="standard-exp-date"
                label="Expiration Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="standard-CVV"
                label="CVV"
              />
            </div>
          </form>
          <Button className={classes.orderButton}>Place Your Order</Button>
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
  addItem: (product) => dispatch(addItem(product)),
  remove: (product) => dispatch(remove(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

