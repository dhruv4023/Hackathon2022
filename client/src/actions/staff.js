import * as api from '../api'


export const postStaff = (commentData) => async (dispatch) => {
    try {
        const { data } = await api.postStaff(commentData);
        dispatch({ type: "POST_STAFF", payload: data });
        dispatch(getAllStaffDetails())
    } catch (error) {
        console.log(error);
    }
}

export const editStaff = (commentData) => async (dispatch) => {
    try {
        const { id, commentBody } = commentData;
        // console.log(id, commentBody)
        const { data } = await api.editStaff(id, commentBody);
        dispatch({ type: 'POST_STAFF', payload: data })
        dispatch(getAllStaffDetails())
    } catch (error) {
        console.log(error)
    }
}
export const getAllStaffDetails = () => async (dispatch) => {
    try {
        const { data } = await api.getAllStaffDetails()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_STAFFS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

export const deleteStaff = (id) => async (dispatch) => {
    try {
        console.log(id)
        await api.deleteStaff(id)
        dispatch(getAllStaffDetails())
    } catch (error) {
        console.log(error)
    }
}
