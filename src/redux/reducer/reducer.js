//This is the only starting form of the reducer, feel free to modularize this file

const initialState = {
  parts: [],
  subAssembly: [],
  users: [],
  signup: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log(payload, 'i am in the reducer');

  switch (type) {
    case 'GETPARTS':
      return { ...state, ...{ parts: payload } };

    case 'GETSUBASSEMBLY':
      return { ...state, ...{ subAssembly: payload } };

    case 'GETUSERLIST':
      return { ...state, ...{ users: payload } };

    case 'SIGNUP': {
      console.log(payload);
      return { ...state, ...{ signup: payload } };
    }

    default:
      return state;
  }
};
