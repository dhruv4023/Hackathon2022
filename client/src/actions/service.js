import * as api from "../api";

export const postService = (serviceData) => async (dispatch) => {
  try {
    const { data } = await api.postService(serviceData);
    console.log(data);
    // dispatch({ type: "POST_SERVICE", payload: data });
    // dispatch(getAllService())
  } catch (error) {
    console.log(error);
  }
};

export const editService = (serviceData) => async (dispatch) => {
  try {
    const { id, serviceBody } = serviceData;
    console.log(serviceBody);
    const { data } = await api.editService(id, serviceBody);
    dispatch({ type: "POST_SERVICE", payload: data });
    dispatch(getAllService());
  } catch (error) {
    console.log(error);
  }
};
export const getAllService = () => async (dispatch) => {
  try {
    const { data } = await api.getAllService();
    // console.log(data);
    dispatch({ type: "FETCH_ALL_SERVICES", payload: data });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

export const deleteService = (id) => async (dispatch) => {
  try {
      console.log(id)
    await api.deleteService(id);
    dispatch(getAllService());
  } catch (error) {
    console.log(error);
  }
};
