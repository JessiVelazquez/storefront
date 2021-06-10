//------SET UP OF INITIAL STATE-----\\
let initialState = {
  categories: [
    { 
      name: 'Womens',
      displayName: 'Womens',
      description: `A collection of women's fashion`
    },
    { 
      name: 'Mens',
      displayName: 'Mens',
      description: `A collection of men's fashion`
    },
    {
      name: 'Accessories',
      displayName: 'Accessories',
      description: `A collection of fashion accessories`
    }
  ],
  activeCategory: ''
}

//-------------REDUCER--------------\\
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE CATEGORY':
      let activeCategory = payload;
      return {...state, activeCategory};

    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

//------------ACTIONS----------------\\
//an action is simply an object literal with a type (to be evaluated in a reducer) and a payload (data)
export const changeCategory = (name) => {
    return {
      type: 'CHANGE CATEGORY',
      payload: name
    }
}


export const reset = () => {
  return {
    type: 'RESET'
  }
}