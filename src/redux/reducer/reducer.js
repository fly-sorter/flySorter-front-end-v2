//This is the only starting form of the reducer, feel free to modularize this file

const initialState = {
  parts: [],
  subAssembly: [],
  users: [],
  subhistory: [],
  signup: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETPARTS':
      return { ...state, ...{ parts: payload } };

    case 'POSTPARTS':
      console.log(payload, `this is the display`);
      console.log(state.parts, 'this is to be spread on');

      return { ...state, ...{ parts: [payload, ...state.parts] } };

    case 'POSTSUB':
      return { ...state, ...{ subAssembly: [...state.subAssembly, payload] } };

    case 'GETSUBASSEMBLY':
      return { ...state, ...{ subAssembly: payload } };

    case 'DELETEPART':
      let retainedData = state.parts.filter(
        element => element.part_id !== payload
      );
      return { ...state, ...{ parts: retainedData } };

    case 'PUTPART':
      let replaceData = state.parts.map(element => {
        if (element.part_id === payload.part_id) {
          return payload;
        }
        return element;
      });
      console.log(replaceData);
      return { ...state, ...{ parts: replaceData } };

    case 'GETUSERLIST':
      return { ...state, ...{ users: payload } };

    case 'SIGNUP': {
      console.log(payload);
      return { ...state, ...{ signup: payload } };
    }

    case 'DELETESUB':
      let retainedDataSub = state.subAssembly.filter(
        element => element.sub_id !== payload
      );
      return { ...state, ...{ subAssembly: retainedDataSub } };

    default:
      return state;
  }
};
