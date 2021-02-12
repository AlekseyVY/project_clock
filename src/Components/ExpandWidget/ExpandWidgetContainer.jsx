import ExpandWidget from "./ExpandWidget";
import {connect} from "react-redux";


const ExpandWidgetContainer = ({timeZone, dayOfTheYear, dayOfTheWeek, weekNumber, time}) => {

  return(
    <>
      <ExpandWidget
        timeZone={timeZone}
        dayOfTheYear={dayOfTheYear}
        dayOfTheWeek={dayOfTheWeek}
        weekNumber={weekNumber}
        time={time}
      />
    </>
  )
}

let mapDispatchToProps = (state) => {
  return {
    timeZone: state.time.timeZone,
    dayOfTheYear: state.time.dayOfTheYear,
    dayOfTheWeek: state.time.dayOfTheWeek,
    weekNumber: state.time.weekNumber
  }
}

export default connect(mapDispatchToProps, {

})(ExpandWidgetContainer);