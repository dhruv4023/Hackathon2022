
import * as api from '../api'
import { setCurrentUser } from './currentUser';


export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: 'AUTH', data });
        console.log(data)
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        // console.log(error.response.data);
        alert(error.response.data.message);
    }
}

