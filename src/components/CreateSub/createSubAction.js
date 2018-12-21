import superagent from 'superagent';

const postSub = payload => {
  return {
    type: 'POSTSUB',
    payload: payload
  };
};

export const subSubmit = (url, payload) => dispatch => {
  console.log(payload);
  return superagent
    .post('https://3s53jbdtk7.execute-api.us-west-2.amazonaws.com/Dev/')
    .send(payload)
    .then(data => {
      console.log(data.body.body, 'i am the original data');
      dispatch(postSub(JSON.parse(data.body.body)));
    })
    .catch(error => console.error(error));
};
