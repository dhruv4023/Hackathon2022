import * as api from "../api";

export const postSubmitForm = (submitformData) => async (dispatch) => {
  try {
    console.log(submitformData);
    const { data } = await api.postSubmitForm(submitformData);
    dispatch({ type: "POST_SUBMITFORM", payload: data });
    console.log(data);
    dispatch(getAllsubmitforms());
  } catch (error) {
    console.log(error);
  }
};

export const editSubmitForm = (submitformData) => async (dispatch) => {
  try {
    const { id, fileData, singleFileOptions } = submitformData;
    console.log(id, fileData, singleFileOptions);
    const { data } = await api.editSubmitForm(id, fileData, singleFileOptions);
    dispatch({ type: "POST_SUBMITFORM", payload: data });
    dispatch(getAllsubmitforms());
  } catch (error) {
    console.log(error);
  }
};
export const getAllsubmitforms = () => async (dispatch) => {
  try {
    const { data } = await api.getAllSubmitForm();
    console.log(data);
    dispatch({ type: "FETCH_ALL_SUBMITFORMS", payload: data });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

export const deleteSubmitForm = (id) => async (dispatch) => {
  try {
    console.log(id);
    await api.deleteSubmitForm(id);
    dispatch(getAllsubmitforms());
  } catch (error) {
    console.log(error);
  }
};
