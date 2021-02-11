
const SET_POSITION = 'SET_POSITION';

const pos = {
  userPosition: {
    latitude: null,
    longitude: null
  }
}


const positionReducer = (state = pos, action) => {
  switch (action.type) {
    case SET_POSITION: {
      return {
        ...state,
        userPosition: {
          ...state,
          latitude: action.payload.lat,
          longitude: action.payload.long
        }
      }
    }
    default: {
      return state
    }
  }
}


export const setPositionAction = (lat, long) => {
  return {
    type: 'SET_POSITION',
    payload: {lat, long}
  }
}

export const setPositionThunk = () =>{
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      dispatch(setPositionAction(pos.coords.latitude, pos.coords.longitude))
    })
  }
}

export default positionReducer;