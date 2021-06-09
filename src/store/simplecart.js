let initialState = {
  cartItems: 0
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, cartItems: state.cartItems + 1 };
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
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