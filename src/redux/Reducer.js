import { combineReducers } from "redux";

const reportState = {

    id : 0,
    name : "",
    incident : "",
    address : "",
    description : ""

}

const userData = {

    id:0,
    name : "",
    email : "",
    phone : "",
    address : ""

}

function ReportReducer(state = reportState, action){

    if(action.type === "SET_REPORT"){
        return {
            ...state,
            [action.inputType] : action.inputValue
        }
    }
    return state;

}

function UserReducer(state = userData, action){

    if(action.type === "SET_USER"){
        return {
            ...state,
            [action.inputType] : action.inputValue
        }
    }
    return state;

}

const reducer = combineReducers({
    ReportReducer,
    UserReducer
})

export default reducer;