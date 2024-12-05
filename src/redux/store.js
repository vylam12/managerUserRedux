// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from "../reducer/rootReducer";
// composeWithDevTools đây cũng là 1 middleware : dùng để xem ứng dụng redux đang chạy như thế nào
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
// includes: reducers, middleware..
// dùng jvs sẽ bị hiện tượng bất đồng bộ (code chạy trước chạy sau) => dùng các middleware
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


export default store;