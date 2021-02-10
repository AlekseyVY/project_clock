import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import timeReducer from "./time";
import positionReducer from "./position";




const rootReducers = combineReducers({
  time: timeReducer,
  user: positionReducer
})




export const store = createStore(rootReducers, applyMiddleware(thunk))