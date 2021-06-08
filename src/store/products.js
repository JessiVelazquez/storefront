import products from "../components/products";

// setup of initial state
let initialState = {
  products: [
    { 
      categoryAss: 'Womens',
      name: 'Skirt',
      description: `A skirt`,
      price: '$50',
      inventoryCount: '25'
    },
    { 
      categoryAss: 'Womens',
      name: 'Jeans',
      description: `Levi's`,
      price: '$80',
      inventoryCount: '30'
    },
    { 
      categoryAss: 'Womens',
      name: 'Sweater',
      description: `A sweater`,
      price: '$65',
      inventoryCount: '45'
    },
    { 
      categoryAss: 'Mens',
      name: 'Dress shirt',
      description: `A dress shirt`,
      price: '$50',
      inventoryCount: '33'
    },
    { 
      categoryAss: 'Mens',
      name: 'Jeans',
      description: `Levi's`,
      price: '$68',
      inventoryCount: '12'
    },
    { 
      categoryAss: 'Mens',
      name: 'Belt',
      description: `A belt`,
      price: '$22',
      inventoryCount: '46'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Necklace',
      description: `A necklace`,
      price: '$39',
      inventoryCount: '18'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Hat',
      description: `A hat`,
      price: '$40',
      inventoryCount: '26'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Sunglasses',
      description: `Cool Shades`,
      price: '$30',
      inventoryCount: '39'
    },
  ],
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE ACTIVE CATEGORY':
      let selectCategory = payload;
      return { ...state, activeCategory: selectCategory };
    
    default:
      return state;
  }
}

export const catChange = (category) => {
  return {
    type: 'CHANGE ACTIVE CATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}