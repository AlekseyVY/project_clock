import Main from "./Main";
import {connect} from "react-redux";
import {getRandomQuoteThunk} from "../../Redux/quote";
import {useEffect} from "react";
import {setPositionThunk} from "../../Redux/user";
import {setTimeDataThunk} from "../../Redux/time";

const MainContainer = ({ citation, author, getRandomQuoteThunk, setPositionThunk, city, cityCode,
                         setTimeDataThunk}) => {

  useEffect(() => {
    getRandomQuoteThunk()
    setPositionThunk()
    setTimeDataThunk()
  },[])

  return (
    <div>
      <Main
        getRandomQuoteThunk={getRandomQuoteThunk}
        citation={citation}
        author={author}
        city={city}
        cityCode={cityCode}
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


