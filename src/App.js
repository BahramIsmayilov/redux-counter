import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import Counter from './Counter';
// import Reducer
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
// components
import Modal from './components/Modal';
import Products from './components/Products';
// redux-thunk
import thunk from 'redux-thunk';

const middleware = [thunk];
// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Counter defaultName="Nuna" />;
      <Modal />
      <Products />
    </Provider>
  );
}

export default App;
