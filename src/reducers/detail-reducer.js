const initialState = {
    product:{},
   
        engineer: {
            employeeId: "",
            engineerName: "",
            domain: "",
            password: "",
          },
          engineers: [],

};
const detailReducer = (state= initialState, action) =>{
    switch(action.type){
        case "GET_ENGINEER":
            return { ...state, engineer: action.payload };
            case "GET_PRODUCT":
                return { ...state, product: action.payload };
                default:
                    return state;

    }
}
export default detailReducer;