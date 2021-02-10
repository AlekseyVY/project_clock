import {connect} from "react-redux";
import {updateTimeThunk} from "../../Redux/time";
import Clock from "./Clock/Clock";

const ClockContainer = ({hours, minutes, seconds, updateTimeThunk}) => {

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
    seconds: state.time.seconds
  }
}

export default connect(mapStateToProps, {
  updateTimeThunk
})(ClockContainer);