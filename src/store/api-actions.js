import superagent from 'superagent';

let api = 'https://api-js401.herokuapp.com/api/v1/products';

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
  .then(response => {
    dispatch(getAction(response.body))
    console.log('GET RESP--', response.body);
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