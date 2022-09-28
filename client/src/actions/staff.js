import * as api from "../api";

export const postStaff = (staffDatas) => async (dispatch) => {
  try {
    const {staffData,singleFileOptions}=staffDatas;
    const { data } = await api.postStaff(staffData,singleFileOptions);
    console.log(data,singleFileOptions);
    dispatch({ type: "POST_STAFF", payload: data });
    dispatch(getAllStaffDetails());
  } catch (error) {
    console.log(error);
  }
};

// export const editStaff = (staffData) => async (dispatch) => {
//   try {
//     const { id, staffBody } = staffData;
//     // console.log(id, staffBody)
//     const { data } = await api.editStaff(id, staffBody);
//     dispatch({ type: "POST_STAFF", payload: data });
//     dispatch(getAllStaffDetails());
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAllStaffDetails = () => async (dispatch) => {
  // console.log("data")
  try {
    // console.log("data")
    // console.log(data)
    const { data } = await api.getAllStaffDetails();
    dispatch({ type: "FETCH_ALL_STAFFS", payload: data });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

export const deleteStaff = (id) => async (dispatch) => {
  try {
    // console.log(id);
    await api.deleteStaff(id);
    dispatch(getAllStaffDetails());
  } catch (error) {
    console.log(error);
  }
};