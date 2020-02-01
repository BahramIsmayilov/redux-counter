import { SET_LOADING, GET_PRODUCTS } from './Actions';

// initial state
const defaultState = {
  loading: false,
  products: []
};

// setup reducer
export default function reducer(state = defaultState, action) {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_PRODUCTS) {
    return { ...state, loading: false, products: action.payload };
  }
  return state;
}
