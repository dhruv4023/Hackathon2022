import * as api from '../api'


export const postDoubt = (doubtData) => async (dispatch) => {
    try {
        const { data } = await api.postDoubt(doubtData);
        dispatch({ type: "POST_DOUBT", payload: data });
        dispatch(getAllDoubt())
    } catch (error) {
        console.log(error);
    }
}

export const editDoubt = (doubtData) => async (dispatch) => {
    try {
        const { id, doubtBody } = doubtData;
        const { data } = await api.editDoubt(id, doubtBody);
        dispatch({ type: 'POST_DOUBT', payload: data })
        dispatch(getAllDoubt())
    } catch (error) {
        console.log(error)
    }
}
export const getAllDoubt = () => async (dispatch) => {
    try {
        const { data } = await api.getAllDoubt()
        console.log(data)
        dispatch({ type: 'FETCH_ALL_DOUBTS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

export const deleteDoubt = (id) => async (dispatch) => {
    try {
        console.log(id)
        await api.deleteDoubt(id)
        dispatch(getAllDoubt())
    } catch (error) {
        console.log(error)
    }
}
