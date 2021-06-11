//------SET UP OF INITIAL STATE-----\\
let initialState = {
  categories: [
    { 
      name: 'womens',
      displayName: 'womens',
      description: `A collection of women's fashion`
    },
    { 
      name: 'mens',
      displayName: 'mens',
      description: `A collection of men's fashion`
    },
    {
      name: 'accessories',
      displayName: 'accessories',
      description: `A collection of fashion accessories`
    },
    {
      name: 'mobile',
      displayName: 'mobile',
      description: `A collection of fashion accessories`
    },
    {
      name: 'phones',
      displayName: 'phones',
      description: `A collection of fashion accessories`
    },
    {
      name: 'shirts',
      displayName: 'shirts',
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