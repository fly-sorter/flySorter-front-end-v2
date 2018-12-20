//This is the only starting form of the reducer, feel free to modularize this file

const initialState = {
  parts: [],
  subAssembly: {
    //Mock Motor
    sub_id: 1787873,
    sub_part: [
      {
        part_category: 'Casting',
        part_count: 580,
        part_desc: 'Base',
        part_id: 100001,
        part_location: 'Warehouse',
        part_longlead: 'Y',
        part_mfgnum: 'BC-BASE-0400',
        part_notes: null,
        part_price: '$14.75',
        part_src: 'Seattle Foundry',
        part_sub: 'N'
      },
      {
        part_category: 'UI',
        part_count: 884,
        part_desc: 'Label',
        part_id: 100008,
        part_location: 'Assembly Bench',
        part_longlead: 'Y',
        part_mfgnum: 'BLENDERCO Product Label',
        part_notes: null,
        part_price: '$0.87',
        part_src: 'UPrint.com',
        part_sub: 'Y'
      }
    ],
    sub_version: 'ver-5.0',
    sub_qty: 15,
    sub_minutes: 450
  },
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
      return { ...state, ...{ parts: [...state.parts, payload] } };

    case 'GETSUBASSEMBLY':
      return { ...state, ...{ subAssembly: payload } };

    case 'DELETEPART':
      let retainedData = state.parts.filter(
        element => element.part_id !== payload
      );
      return { ...state, ...{ parts: retainedData } };

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
