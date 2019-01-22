import superagent from 'superagent';
const createSub = payload => {
  console.log(' I am hit in theory');
  return {
    type: 'GETPARTS',
    payload: payload,
  };
};

export const getSubAssembly = (url, payload) => dispatch => {
  return superagent
    .get('https://0y076pm24b.execute-api.us-west-2.amazonaws.com/default/parts')
    .then(data => {
      dispatch(createSub(JSON.parse(data.text)));
    });
};

const deleteParts = payload => {
  console.log(' I am hit in theory');
  return {
    type: 'DELETESUB',
    payload: payload,
  };
};

export const deleteItem = (url, payload) => dispatch => {
  return superagent
    .delete('https://a6aarepbd3.execute-api.us-west-2.amazonaws.com/dev/')
    .send(payload)
    .then(data => {
      console.log(data);
      dispatch(deleteParts(JSON.parse(data.text).body));
    });
};
