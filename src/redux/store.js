import { combineReducers, createStore } from "redux";
import dessert from "./reducers/dessert";

const rootReducer = combineReducers({ 
    dessert: dessert
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 