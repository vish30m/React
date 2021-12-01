//import counterReducer from "./counter-reducer";
//import examReducer from "./exam-reducer";
import complaintReducer from "../reducers/complaint-reducer"
import { combineReducers} from "redux";
import detailReducer from "./detail-reducer";

const rootReducer = combineReducers({
   
   complaint:complaintReducer,
   engineer:detailReducer,
    
});

export default rootReducer;