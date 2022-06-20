import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = 'https://yachtimeapp.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';

// ReactDOM.render(
//    <Provider store={store}>
//       <Auth0Provider
//          domain='dev-xiwxe9u1.us.auth0.com'
//          clientId='3r3QNv0jS6aCasZByiNgURRyA2PUqCyX'
//          redirectUri={window.location.origin}
//       >
//          <App />
//       </Auth0Provider>
//    </Provider>,
//    document.getElementById('root')
// );


reportWebVitals();
