import axios from 'axios';
import {
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
    DELETE_USER_SUCCESS,
    FETCH_UPDATE_USER_REQUEST, FETCH_UPDATE_USER_SUCCESS, FETCH_UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
} from './types';

export const fetchAllUser = () => {

    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersError());
        }
    }
}
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUser: data
    }
}
export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}
export const createNewUser = (email, password, username) => {

    return async (dispatch, getState) => {
        dispatch(createUsersRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username });
            if (res) {
                dispatch(createhUsersSuccess());
                dispatch(fetchAllUser());
            }

        } catch (error) {
            console.log(error);
            dispatch(createUsersError());
        }
    }
}
export const createUsersRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createhUsersSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    }
}
export const createUsersError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}
export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
            console.log("res", res)
            if (res && res.data.errCode === 0) {
                dispatch(deleteUsersSuccess());
                dispatch(fetchAllUser());
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export const deleteUsersSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS,
    }
}
export const updateUser = (email, username, id) => {

    return async (dispatch, getState) => {
        dispatch(updateUserRequest());
        try {
            let res = await axios.post("http://localhost:8080/user/update-user", { email, username, id });
            if (res) {
                dispatch(updateUserSuccess());
                dispatch(fetchAllUser());
            }

        } catch (error) {
            console.log(error);
            dispatch(updateUserError());
        }
    }
}

export const updateUserRequest = () => {
    return {
        type: UPDATE_USER_REQUEST
    }
}
export const updateUserSuccess = () => {
    return {
        type: UPDATE_USER_SUCCESS,
    }
}
export const updateUserError = () => {
    return {
        type: UPDATE_USER_ERROR
    }
}

export const fetchUpdateUserRequest = () => {
    return {
        type: FETCH_UPDATE_USER_REQUEST
    }
}
export const fetchUpdateUserSuccess = (data) => {
    return {
        type: FETCH_UPDATE_USER_SUCCESS,
        dataUser: data
    }
}

export const fetchUpdateUserError = () => {
    return {
        type: FETCH_UPDATE_USER_ERROR
    }
}
export const fetchUpdateUser = (id) => {

    return async (dispatch, getState) => {
        dispatch(fetchUpdateUserRequest());
        try {
            let res = await axios.get(`http://localhost:8080/update-user/${id}`);
            if (res) {
                dispatch(fetchUpdateUserSuccess(res.data));
            }

        } catch (error) {
            console.log(error);
            dispatch(fetchUpdateUserError());
        }
    }
}
