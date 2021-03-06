import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import storeCreater from './store';


const store=storeCreater()
 console.log("my Store=",store.getState())


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,  
  document.getElementById('root')
);

