import superagent from 'superagent';

const postTable = payload => {
  console.log(' I am hit in theory');
  return {
    type: 'GETPARTS',
    payload: payload
  };
};

export const getParts = (url, payload) => dispatch => {
  return superagent
    .get(
      'https://c9hjszviik.execute-api.us-west-2.amazonaws.com/default/emeryTestMySQL'
    )
    .then(data => {
      dispatch(postTable(JSON.parse(data.text)));
    });
};

const deleteParts = payload => {
  console.log(' I am hit in theory');
  return {
    type: 'DELETEPART',
    payload: payload
  };
};

export const deleteItem = (url, payload) => dispatch => {
  return superagent
    .delete(
      'https://0t4nhh9o27.execute-api.us-west-2.amazonaws.com/default/delete'
    )
    .send(payload)
    .then(data => {
      console.log(JSON.parse(data.text).body);
      dispatch(deleteParts(JSON.parse(data.text).body));
    });
};
