const initialState = {
    complaints:[],
    complaint:{},
};

const complaintReducer = (state= initialState, action) =>{
    switch(action.type){
        case "GET_COMPLAINTS":
            return {...state, complaints:[...action.payload]};
        
            case "DELETE_COMPLAINT":
                const complaints = state.complaints.filter((p) => p.complaintId !== action.payload.complaintId); // p1, p3
                return { ...state, complaints: action.payload};
        default:
            return state;
            

    }
};

export default complaintReducer;
