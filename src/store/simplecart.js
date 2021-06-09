let initialState = {
  cartList: [],
  cartItems: 0
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartItems: state.cartItems + 1 };

    case 'ADD':
      console.log('PAYLOAD', payload);
      console.log('CARTITEMS', state.cartItems);
      console.log('cartList', state.cartList);
      // return {cartList:[...state.cartList]}
      let newState = {
        // ...state,
        cartList: [...state.cartList, payload],
        cartItems: state.cartItems++
      };
      // console.log('OBJ ENTRIES', Object.entries(newState));
      console.log(newState);
      return newState;
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }

}

export const addItem = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}

export const increment = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}