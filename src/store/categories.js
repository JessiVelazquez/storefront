// setup of initial state
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

// a reducer is meant to evaluate the TYPE of an action
// and then create a new (copy) of the state to be handed off to the redux store
// it is also: a pure function and uses a SWITCH statement convention
export default (state = initialState, action) => {
  let { type, payload } = action;

  // same as above:
  // let type = action.type;
  // let payload = action.payload;

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

// an action creator is simply a function that returns an action
export const changeCategory = (name) => {
    // an action is simply an object literal with a type (to be evaluated in a reducer) and a payload (data)
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