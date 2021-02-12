import {connect} from "react-redux";
import {updateTimeThunk} from "../../Redux/time";
import Clock from "./Clock/Clock";


const ClockContainer = ({hours, minutes, updateTimeThunk}) => {


  setInterval(() => {
    updateTimeThunk()
  }, 1000)

  return (
    <div>
      <Clock hours={hours} minutes={minutes}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    hours: state.time.hours,
    minutes: state.time.minutes,
    lat: state.user.userPosition.latitude,
    long: state.user.userPosition.longitude
  }
}

export default connect(mapStateToProps, {
  updateTimeThunk
})(ClockContainer);