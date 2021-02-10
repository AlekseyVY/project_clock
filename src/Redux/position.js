const SET_POSITION = 'SET_POSITION';

const pos = {
  userPosition: null
}


const Position = (state = pos, action) => {
  switch (action.type) {
    case SET_POSITION: {
      return {
        ...state,
        userPosition: action.payload
      }
    }
    default: {
      return state
    }
  }
}


export const setPositionAction = (position) => {
  return {
    type: 'SET_POSITION',
    payload: position
  }
}


export default Position;