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
      let item = payload;
      state.cartItems++;
      state.cartList.push(item);
      return state;
    
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
    type: 'INCREMENT',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}