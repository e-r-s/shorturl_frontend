import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

// window.VARS = {
//   apiUrl: 'http://46.197.172.3:3030/url',
//   shortUrl: 'http://46.197.172.3:3030/',
//   siteUrl: 'http://localhost:8080/',
// };
window.VARS = {
  apiUrl: 'http://localhost:3030/url',
  shortUrl: 'http://localhost:3030/',
  siteUrl: 'http://localhost:8080/',
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




