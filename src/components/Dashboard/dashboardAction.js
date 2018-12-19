import superagent from 'superagent';

const getTable = payload => {
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
      console.log(JSON.parse(data.text));
      dispatch(getTable(JSON.parse(data.text)));
    });
};
