import {
  APPLICATION_UPDATE,
  APPLICATION_GET
} from '../actions/types';

const INITIAL_STATE = {
  company: '', //name
  title: '',
  stage: '',
  applications: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case APPLICATION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case APPLICATION_GET:
      return { ...state, ...INITIAL_STATE, applications: action.payload };
    default:
      return state;
  }
};

/** Boilerplate Reducer **/
// const INITIAL_STATE = {};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
