import { combineReducers } from "redux";
import AddNew from "./AddNew";
import Fixinfo from './Fixinfo';

const rootReducer = combineReducers({
    addNew:AddNew,
    fixInfo: Fixinfo
})

export default rootReducer;
