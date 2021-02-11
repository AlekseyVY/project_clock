import Main from "./Main";
import {connect} from "react-redux";
import {getRandomQuoteThunk} from "../../Redux/quote";
import {useEffect} from "react";
import {setPositionThunk} from "../../Redux/user";
import {setTimeDataThunk} from "../../Redux/time";
import {timeOfTheDayHelper} from "../../helpers/helper";
import {useState} from "react";

const MainContainer = ({ citation, author, getRandomQuoteThunk, setPositionThunk, city, cityCode,
                         setTimeDataThunk, hours}) => {
  const [time, setTime] = useState({})

  useEffect(() => {
    getRandomQuoteThunk()
    setPositionThunk()
    setTimeDataThunk()
    setTime(timeOfTheDayHelper(hours))
  },[])

  return (
    <div>
      <Main
        getRandomQuoteThunk={getRandomQuoteThunk}
        citation={citation}
        author={author}
        city={city}
        cityCode={cityCode}
        time={time}
      />
    </div>
  )
}

let mapDispatchToProps = (state) => {
  return {
    citation: state.quote.citation,
    author: state.quote.author,
    city: state.user.userPosition.city,
    cityCode: state.user.userPosition.countryCode,
    hours: state.time.hours,
  }
}


export default connect(mapDispatchToProps, {
  getRandomQuoteThunk,
  setPositionThunk,
  setTimeDataThunk
})(MainContainer);


