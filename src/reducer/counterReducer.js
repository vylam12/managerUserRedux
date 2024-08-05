import { INCREMENT, DECREMENT } from '../action/types';
//mỗi reducer sẽ quản lý 1 cụm data của redux
const INITIAL_STATE = {
    count: 0,
    name: 'Vy'
};
// reducer nhận vào 2 tham số
//1. state: data mà nó quản lý
//2. action được truyền vào 
const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log("i'm running INCREMENT ");
            return {
                //merge state (dùng 3 dấu chấm): để copy state 
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            console.log("i'm running DECREMENT ");
            return {
                ...state, count: state.count - 1,
            };
        // nếu action chưa khai báo tên (type) thì sẽ chạy vào trường hợp này
        default: return state;
    }
};
export default counterReducer;