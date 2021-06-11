import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { catChange, reset } from '../store/products.js';
import { reset, addItem } from '../store/simplecart.js';
import * as actions from '../store/api-actions.js';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(20),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    padding: '50%',
  },
  gridItem: {
    width: '75%'
  }
}));


const Products = props => {
  console.log('API-PRODUCTS', props.apiReducer);
  let regex = /[^!]*/;

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  //--------working to get API rendering------------\\
  return (
    <Container className={classes.cardGrid} maxWidth="xs">
      <h1>{props.catReducer.activeCategory}</h1>
      <Grid container spacing={4}>
        {props.apiReducer.results.map(product => {
          if (product.category === props.catReducer.activeCategory)
          return (
            <Grid item key={product._id} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title="image thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name} ${product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => props.addItem(product)}>
                  Add to Cart!
                </Button>
              </CardActions>
            </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

//---------hard coded products rendering---------------\\
//   return (
//     <Container className={classes.cardGrid} maxWidth="xs">
//       <h1>{props.catReducer.activeCategory}</h1>
//       <Grid container spacing={4}>
//         {props.prodReducer.products.map(product => {
//           if (product.categoryAss === props.catReducer.activeCategory)
//           return (
//             <Grid item key={product._id} className={classes.gridItem}>
//             <Card className={classes.card}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image={product.image}
//                   title="image thumbnail"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {product.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary" onClick={() => props.addItem(product)}>
//                   Add to Cart!
//                 </Button>
//               </CardActions>
//             </Card>
//             </Grid>
//           )
//         })}
//       </Grid>
//     </Container>
//   )
// }

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer
})

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  reset: () => dispatch(reset()),
  addItem: (product) => dispatch(addItem(product)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

