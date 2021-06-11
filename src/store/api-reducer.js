import superagent from 'superagent';

let initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'GET':
      return {...state, results: payload};

    case 'POST':
      return payload;

    case 'PUT':
      return payload;

    case 'DELETE':
      return payload;

    default:
      return state;
  }
}