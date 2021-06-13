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

    case 'REMOVE':
      const cartList = [...state.cartList]
      let deleteItem = true;
      const updatedCart = cartList.filter((item) => {
        if (item === payload && deleteItem) {
          deleteItem = false;
          return false;
        } else {
          return true;
        }
      })
      return {...state, cartList: [...updatedCart]}
    
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

export const remove = (product) => {
  return {
    type: 'REMOVE',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}