import Day from "./Day/Day";
import styled from "styled-components";


const Main = ({citation, author, getRandomQuoteThunk, city, cityCode, time}) => {

  return(
    <Container>
      <Day
        getRandomQuoteThunk={getRandomQuoteThunk}
        citation={citation}
        author={author}
        city={city}
        cityCode={cityCode}
        time={time}
      />
    </Container>
  )
}



export default Main;


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;;
  box-sizing: border-box;
`;