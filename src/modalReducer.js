import { MODAL_OPEN, MODAL_CLOSE } from './Actions';

// initial state
const defaultReducer = {
  isOpen: false,
  name: '',
  text: ''
};

// setup; reducer
export default function modalReducer(state = defaultReducer, action) {
  if (action.type === MODAL_OPEN) {
    return {
      ...state,
      isOpen: true,
      name: action.payload.name,
      text: action.payload.text
    };
  }
  if (action.type === MODAL_CLOSE) {
    return {
      ...state,
      isOpen: false,
      name: '',
      text: ''
    };
  }
  return state;
}
