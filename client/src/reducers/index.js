import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReduder from "./errorReducers";

export const rootReducer =  combineReducers({
    auth:authReducer,
    err:errorReduder
})