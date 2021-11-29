
import axios from "axios";


export const getAllComplaintsAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8080/api/complaints");
  console.log(response.data);
  dispatch({
    type: "GET_COMPLAINTS",
    payload: response.data,
  });
};
export const deleteComplaintAction = (id) => async (dispatch ) => {
  const result = await axios.delete(`http://localhost:8080/api/deleteCode/${id}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "DELETE_COMPLAINT",
    payload: result.data,
  });
};
