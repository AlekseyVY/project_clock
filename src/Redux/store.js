import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import timeReducer from "./time";




const rootReducers = combineReducers({
  time: timeReducer
})




export const store = createStore(rootReducers, applyMiddleware(thunk))