import superagent from 'superagent';

const putPart = payload => {
  return {
    type: 'PUTPART',
    payload: payload
  };
};

export const editPart = (url, payload) => dispatch => {
  console.log(payload, 'in edit part');
  return superagent
    .put(
      'https://3asl0bs5v3.execute-api.us-west-2.amazonaws.com/default/update'
    )
    .send(payload)
    .then(data => {
      console.log(data.body, 'i am the original data');
      dispatch(putPart(data.body));
    })
    .catch(error => console.error(error));
};
