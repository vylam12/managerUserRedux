import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/scss/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
);

reportWebVitals();
