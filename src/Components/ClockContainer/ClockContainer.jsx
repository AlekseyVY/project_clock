import {connect} from "react-redux";
import {updateTimeThunk} from "../../Redux/time";
import Clock from "./Clock/Clock";
import {useEffect} from 'react'
import {setPositionThunk} from "../../Redux/user";


const ClockContainer = ({hours, minutes, seconds, lat, long, updateTimeThunk, setPositionThunk}) => {

  useEffect(() => {
    setPositionThunk()
  },[])

  setInterval(() => {
    updateTimeThunk()
  }, 1000)

  return (
    <div>
      <Clock hours={hours} minutes={minutes} seconds={seconds}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    hours: state.time.hours,
    minutes: state.time.minutes,
    seconds: state.time.seconds,
    lat: state.user.userPosition.latitude,
    long: state.user.userPosition.longitude
  }
}

export default connect(mapStateToProps, {
  updateTimeThunk,
  setPositionThunk
})(ClockContainer);