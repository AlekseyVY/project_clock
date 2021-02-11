import Main from "./Main";
import {connect} from "react-redux";
import {getRandomQuoteThunk} from "../../Redux/quote";
import {useEffect} from "react";

const MainContainer = ({ citation, author, getRandomQuoteThunk}) => {

  useEffect(() => {
    getRandomQuoteThunk()
  },[])

  return (
    <div>
      <Main
        getRandomQuoteThunk={getRandomQuoteThunk}
        citation={citation}
        author={author}
      />
    </div>
  )
}

let mapDispatchToProps = (state) => {
  return {
    citation: state.quote.citation,
    author: state.quote.author
  }
}


export default connect(mapDispatchToProps, {
  getRandomQuoteThunk
})(MainContainer);


