//import counterReducer from "./counter-reducer";
//import examReducer from "./exam-reducer";
import complaintReducer from "../reducers/complaint-reducer"
import { combineReducers} from "redux";

const rootReducer = combineReducers({
   
   complaint:complaintReducer,
    
});

export default rootReducer;