import {
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_ERROR, CREATE_USER_SUCCESS,
    FETCH_UPDATE_USER_REQUEST, FETCH_UPDATE_USER_SUCCESS, FETCH_UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
} from '../action/types';

const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating: false,
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //lấy hết danh sách user
        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST: ", action);
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS", action);
            return {
                ...state, listUsers: action.dataUser,
                isLoading: false,
                isError: false
            };
        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR", action);
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        // thêm nhân viên
        case CREATE_USER_REQUEST:
            console.log("CREATE_USER_REQUEST", action);
            return {
                ...state, isCreating: true
            };
        case CREATE_USER_SUCCESS:
            console.log("CREATE_USER_SUCCESS", action);
            return {
                ...state,
                listUsers: [...state.listUsers, action.payload],
                isCreating: false
            };
        case CREATE_USER_ERROR:
            console.log("CREATE_USER_ERROR", action);
            return {
                ...state, isCreating: false
            };

        // lấy thông tin nhân viên cần update
        case FETCH_UPDATE_USER_REQUEST:
            console.log("FETCH_UPDATE_USER_REQUEST", action);
            return {
                ...state,
            };
        case FETCH_UPDATE_USER_SUCCESS:
            console.log("FETCH_UPDATE_USER_SUCCESS", action);
            return {
                ...state,
                user: action.dataUser
            };
        case FETCH_UPDATE_USER_ERROR:
            console.log("FETCH_UPDATE_USER_ERROR", action);
            return {
                ...state
            };
        //  update nhân viên
        case UPDATE_USER_REQUEST:
            console.log("UPDATE_USER_REQUEST", action);
            return {
                ...state,
            };
        case UPDATE_USER_SUCCESS:
            console.log("UPDATE_USER_SUCCESS", action);
            return {
                ...state,
                listUsers: [...state.listUsers, action.payload],

            };
        case UPDATE_USER_ERROR:
            console.log("UPDATE_USER_ERROR", action);
            return {
                ...state,
            };
        default: return state;
    }
};
export default userReducer;