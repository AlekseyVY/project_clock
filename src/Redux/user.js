import {getGeoLocation} from "../api/geolocationAPI";

const SET_POSITION = 'SET_POSITION';
const SET_CITY = 'SET_CITY';

const pos = {
  userPosition: {
    latitude: null,
    longitude: null,
    city: 'Earth',
    countryCode: 'Eh'
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
    case SET_CITY: {
      return {
        ...state,
        userPosition: {
          ...state,
          city: action.payload.city,
          countryCode: action.payload.code
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

export const setCityAction = (city, code) => {
  return {
    type: 'SET_CITY',
    payload: {city, code}
  }
}

export const setPositionThunk = () =>{
  return async (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      dispatch(setPositionAction(pos.coords.latitude, pos.coords.longitude))
    })
    let resp = await getGeoLocation()
    dispatch(setCityAction(resp.city, resp.country_code))
  }
}

export default positionReducer;