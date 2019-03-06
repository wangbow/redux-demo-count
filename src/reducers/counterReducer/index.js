import {Counter} from "./counter";
import {combineReducers} from "redux";

const allReducers = {countInfo:Counter};
const counterReducers = combineReducers(allReducers);

export default counterReducers;