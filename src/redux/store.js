import { combineReducers, createStore } from "redux";
import { bakingjokes } from "./reducers/bakingjokes";

const rootReducer = combineReducers({ 
    bakingjokes: bakingjokes
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 