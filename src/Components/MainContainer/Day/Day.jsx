import ClockContainer from "../../ClockContainer/ClockContainer";
import styled from 'styled-components'
import backgroundImg from '../../../resources/desktop/bg-image-daytime.jpg'
import Citation from "../Citation/Citation";
import MainWidget from "../MainWidget/MainWidget";

const Day = () => {
  return(
    <Container>
      <CitationPosition>
        <Citation />
      </CitationPosition>
      <MainWidget />
    </Container>
  )
}


export default Day;

const Container = styled.div`
  width: 1440px;
  height: 800px;
  background-image: url(${backgroundImg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CitationPosition = styled.div`
  margin-top: 56px;
  margin-left: 165px;
  `;