import { combineReducers } from "redux";
import useReducer from './reducers/userReducer';

export default combineReducers({
user:useReducer
});