import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { reset, addItem } from '../store/simplecart.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    padding: 50,
    margin: 50,
    marginTop: 150,
  },
});


const Details = (props) => {
  const classes = useStyles();
  let selectedProduct = props.location.state;
  console.log('---------', props.location.state);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={selectedProduct.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {selectedProduct.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {selectedProduct.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {selectedProduct.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.addItem(selectedProduct)}>
          Add to Cart!
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);

