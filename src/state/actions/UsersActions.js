import axios from 'axios';

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const LOADING_USERS = "LOADING_USERS";

const FetchUsers = () => {
    return async (dispatch) => {
        dispatch(LoadingUsers())
        try {
            const response = await axios.get("https://reqres.in/api/users");
            dispatch(SuccessFetchingUsers(response.data.data));
        }
        catch (error) {
            dispatch(ErrorFetchingUsers(error));
        }
    }
};

const LoadingUsers = () => ({
    type: LOADING_USERS,
})

const SuccessFetchingUsers = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users
})

const ErrorFetchingUsers = (error) => ({
    type: FETCH_USERS_ERROR,
    error
})




export { FetchUsers as fetchUsers };