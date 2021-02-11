import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import timeReducer from "./time";
import positionReducer from "./user";
import quoteReducer from "./quote";




const rootReducers = combineReducers({
  time: timeReducer,
  user: positionReducer,
  quote: quoteReducer
})




export const store = createStore(rootReducers, applyMiddleware(thunk))