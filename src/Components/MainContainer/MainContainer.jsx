import Main from "./Main";
import {connect} from "react-redux";
import {getRandomQuoteThunk} from "../../Redux/quote";
import {useEffect} from "react";
import {setPositionThunk} from "../../Redux/user";

const MainContainer = ({ citation, author, getRandomQuoteThunk, setPositionThunk, city, cityCode}) => {

  useEffect(() => {
    getRandomQuoteThunk()
    setPositionThunk()
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
    cityCode: state.user.userPosition.countryCode
  }
}


export default connect(mapDispatchToProps, {
  getRandomQuoteThunk,
  setPositionThunk
})(MainContainer);


