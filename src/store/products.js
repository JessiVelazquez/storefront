// setup of initial state
let initialState = {
  products: [
    { 
      categoryAss: 'Womens',
      name: 'Skirt',
      description: `A skirt`,
      price: '$50',
      inventoryCount: '25',
      image: 'https://ae01.alicdn.com/kf/H2ef43a91b29649379fab49535117bb94D/Stylish-Elegant-Skirt-Suits-Women-2021-Fashion-2-Buttons-Cropped-Blazer-Side-Split-Mini-Skirts-Suits.jpg_Q90.jpg_.webp'
    },
    { 
      categoryAss: 'Womens',
      name: 'Jeans',
      description: `Levi's`,
      price: '$80',
      inventoryCount: '30',
      image: 'https://photo.venus.com/im/20177449.jpg?preset=xl_70'
    },
    { 
      categoryAss: 'Womens',
      name: 'Sweater',
      description: `A sweater`,
      price: '$65',
      inventoryCount: '45',
      image: 'https://ae01.alicdn.com/kf/Hcee760e999de4c5f876f700a554c24c0w/Women-Solid-Beige-Hollow-Sweater-2021-Spring-Lady-Thin-Hole-Split-Knitwear-Cool-Hipster-Gothic-O.jpg_Q90.jpg_.webp'
    },
    { 
      categoryAss: 'Mens',
      name: 'Dress shirt',
      description: `A dress shirt`,
      price: '$50',
      inventoryCount: '33',
      image: 'https://spy.com/wp-content/uploads/2021/03/dress-shirt-bonobos.jpg?w=683'
    },
    { 
      categoryAss: 'Mens',
      name: 'Jeans',
      description: `Levi's`,
      price: '$68',
      inventoryCount: '12',
      image: 'https://i.pinimg.com/236x/fb/b1/41/fbb141cd71ca0bca0587659731b5125f.jpg'
    },
    { 
      categoryAss: 'Mens',
      name: 'Belt',
      description: `A belt`,
      price: '$22',
      inventoryCount: '46',
      image: 'https://cdn.shopify.com/s/files/1/1994/2941/products/110-0007_color_tobacco_03_1280x.jpg?v=1619154322'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Necklace',
      description: `A necklace`,
      price: '$39',
      inventoryCount: '18',
      image: 'https://cdn.shopify.com/s/files/1/0855/4126/products/Rosegoldemeraldpendantnecklace_womensjewellery_indieandharper_256x.jpg?v=1621301826'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Hat',
      description: `A hat`,
      price: '$40',
      inventoryCount: '26',
      image: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    { 
      categoryAss: 'Accessories',
      name: 'Sunglasses',
      description: `Cool Shades`,
      price: '$30',
      inventoryCount: '39',
      image: 'https://images.pexels.com/photos/2811088/pexels-photo-2811088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
  ],
}

//--------------REDUCER----------------\\
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

//------------ACTIONS--------------------\\
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