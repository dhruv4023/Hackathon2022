import * as api from '../api'


export const posthomedata = (homedataData) => async (dispatch) => {
    try {
        const { data } = await api.posthomedata(homedataData);
        dispatch({ type: "POST_HOMEDATA", payload: data });
        dispatch(getAllhomedatas())
    } catch (error) {
        console.log(error);
    }
}

export const edithomedata = (homedataData) => async (dispatch) => {
    try {
        const { id, arryData } = homedataData;
        // console.log(id, homedataBody)
        const { data } = await api.edithomedata(id, arryData);
        dispatch({ type: 'POST_HOMEDATA', payload: data })
        dispatch(getAllhomedatas())
    } catch (error) {
        console.log(error)
    }
}
export const getAllhomedatas = () => async (dispatch) => {
    try {
        const { data } = await api.getAllhomedata()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_HOMEDATA', payload: data })
    } catch (error) {
        console.log(error)
        // console.log("error")
    }
}

export const deletehomedata = (id) => async (dispatch) => {
    try {
        // console.log(id)
        await api.deletehomedata(id)
        dispatch(getAllhomedatas())
    } catch (error) {
        console.log(error)
    }
}
