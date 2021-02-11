import styled from 'styled-components'
import backgroundImg from '../../../resources/desktop/bg-image-daytime.jpg'
import Citation from "../Citation/Citation";
import MainWidget from "../MainWidget/MainWidget";
import ExpandWidgetContainer from "../../ExpandWidget/ExpandWidgetContainer";

const Day = () => {

  const moreToggled = false
  return (
    <>
      {
        moreToggled
          ? <Container>
            <HideCitation>
              <Citation/>
            </HideCitation>
          <MainWidgetPosition>
            <MainWidget/>
          </MainWidgetPosition>
            <ExpandWidgetContainer />
          </Container>
          : <Container>
            <CitationPosition>
              <Citation/>
            </CitationPosition>
            <MainWidgetPosition>
              <MainWidget/>
            </MainWidgetPosition>
          </Container>
      }
    </>

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


const HideCitation = styled.div`
  display: none;
  padding: 0;
  margin: 0;
`;

const MainWidgetPosition = styled.div`
  height: 400px;
  margin-top: 56px;
  margin-left: 165px;
  `;