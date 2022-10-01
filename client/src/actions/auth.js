
import * as api from '../api'
import { setCurrentUser } from './currentUser';


export const login = (authData) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser())
        dispatch(getAdminStatus())
    } catch (error) {
        // console.log(error.response.data);
        alert(error.response.data.message);
    }
}

export const getAdminStatus=() => async (dispatch) => {
    try {
        const { data } = await api.getAdminStatus()
        dispatch({ type: 'GET_ADMIN_STATUS', payload: data })
        console.log(data)
    } catch (error) {
        console.log(error)
        
        console.log("error")
    }
}

