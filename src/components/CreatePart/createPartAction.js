import superagent from 'superagent';

const postPart = payload => {
  return {
    type: 'POSTPARTS',
    payload: payload,
  };
};

export const partSubmit = (url, payload) => dispatch => {
  return superagent
    .post(
      'https://0t4nhh9o27.execute-api.us-west-2.amazonaws.com/default/create'
    )
    .send(payload)
    .then(data => {
      console.log(data.body.body, 'i am the original data');

      dispatch(postPart(JSON.parse(data.body.body)));
    })
    .catch(error => console.error(error));
};
