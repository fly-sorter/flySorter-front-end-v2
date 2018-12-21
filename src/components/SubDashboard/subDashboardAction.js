import superagent from 'superagent';

const getSubTable = payload => {
  console.log(' I am hit in theory');
  return {
    type: 'GETSUBASSEMBLY',
    payload: payload
  };
};

export const getSub = (url, payload) => dispatch => {
  return superagent
    .get(
      'https://q6m17qvjue.execute-api.us-west-2.amazonaws.com/default/subAssm'
    )
    .then(data => {
      console.log(JSON.parse(data.text));
      dispatch(getSubTable(JSON.parse(data.text)));
    });
};
