import { INCREMENT, DECREMENT } from './types';
// muốn nói cho redux phải làm một cái gì đó từ phía client thì phải khai báo 1 biến là action
// action (là 1 biến, 1 object của JVS) chính là việc có thể thông báo đến redux nó cần phải làm gì

export const increaseCounter = () => {
    return {
        type: INCREMENT,
        payload: { like: 'Hello', name: 'Lam' }
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};