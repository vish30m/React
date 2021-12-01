import axios from "axios";
export const getEngineerAction = () => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/api/getEngineer/${this.props.match.params.complaintId}`);
    
    console.log(response.data);
    dispatch({
      type: "GET_ENGINEER",
      payload: response.data,
    });
  };
  export const getProductAction = () => async (dispatch) => {
    const response = await axios.get(`http://localhost:8080/api/getProduct/${this.props.match.params.complaintId}`);
    console.log(response.data);
    dispatch({
      type: "GET_PRODUCT",
      payload: response.data,
    });
  };