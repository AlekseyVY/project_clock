
const UPDATE_TIME = "UPDATE_TIME";

let initialState = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds()
}


const timeReducer = (state= initialState, action) => {
  switch(action.type) {
    case UPDATE_TIME: {
      return {
        ...state,
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
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


export const updateTimeThunk = () => {
  return (dispatch) => {
    dispatch(updateTimeAction())
  }
}



export default timeReducer;