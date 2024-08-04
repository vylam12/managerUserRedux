import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Provider:  để cho react biết sự tồn tại của redux thì phải gọi đến component đặc biệt 
import { Provider } from 'react-redux';
//việc cấu hình biến store như thế nào sẽ quyết định trong redux sẽ chứa được cái gì
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //phần cấu hình giống nhau. khác nhau là khi cấu hình cho store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
