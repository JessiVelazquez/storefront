import superagent from 'superagent';

let api = 'https://api-server-jessi.herokuapp.com/store';
// let api = 'http://localhost:3000/store';

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
  .then(response => {
    dispatch(getAction(response.body))
  })
}

export const putRemoteData = (id, data) => async dispatch => {
  let response = await (await superagent.put(`${api}/${id}`)).send(data);
}

export const getAction = data => {
  return {
    type: 'GET',
    payload: data,
  }
}