import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import './index.css';

function TheRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default TheRedux