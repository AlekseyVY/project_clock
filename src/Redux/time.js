import {getTime} from "../api/timeAPI";

const UPDATE_TIME = "UPDATE_TIME";
const SET_TIME_DATA = "SET_TIME_DATA";

let initialState = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  timeZone: null,
  dayOfTheYear: null,
  dayOfTheWeek: null,
  weekNumber: null
}


const timeReducer = (state= initialState, action) => {
  switch(action.type) {
    case UPDATE_TIME: {
      return {
        ...state,
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      }
    }
    case SET_TIME_DATA: {
      return {
        ...state,
        timeZone: action.payload.timeZone,
        dayOfTheYear: action.payload.dayOfTheYear,
        dayOfTheWeek: action.payload.dayOfTheWeek,
        weekNumber: action.payload.weekNumber
      }
    }
    default: {
      return state
    }
  }
}



export const updateTimeAction = () => {
  return {
    type: 'UPDATE_TIME'
  }
}

export const setTimeDataAction = (timeZone, dayOfTheYear, dayOfTheWeek, weekNumber) => {
  return {
    type: 'SET_TIME_DATA',
    payload: {timeZone, dayOfTheYear, dayOfTheWeek, weekNumber}
  }
}

export const updateTimeThunk = () => {
  return (dispatch) => {
    dispatch(updateTimeAction())
  }
}

export const setTimeDataThunk = () => {
  return async (dispatch) => {
    let resp = await getTime()
    dispatch(setTimeDataAction(resp.timezone, resp.day_of_year, resp.day_of_week, resp.week_number))
  }
}

export default timeReducer;