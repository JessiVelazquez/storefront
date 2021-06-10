let initialState = {
  cartList: [],
  cartItems: 0
}


//----------------REDUCER-----------------\\
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartItems: state.cartItems + 1 };

    case 'ADD':
      let newState = {
        cartList: [...state.cartList, payload],
        cartItems: state.cartItems++
      };
      return newState;
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}


//-------------ACTIONS--------------\\
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