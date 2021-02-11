import styled from 'styled-components'
import backgroundImg from '../../../resources/desktop/bg-image-daytime.jpg'
import Citation from "../Citation/Citation";
import MainWidget from "../MainWidget/MainWidget";
import ExpandWidgetContainer from "../../ExpandWidget/ExpandWidgetContainer";
import {useState} from "react";

const Day = ({ citation, author, getRandomQuoteThunk, city, cityCode}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {
        toggle
          ?
          <Container>
            <HideCitation>
              <Citation
                getRandomQuoteThunk={getRandomQuoteThunk}
                citation={citation}
                author={author}
              />
            </HideCitation>
          <MainWidgetPosition>
            <MainWidget
              toggle={toggle}
              setToggle={setToggle}
              city={city}
              cityCode={cityCode}
            />
          </MainWidgetPosition>
            <ExpandWidgetContainer />
          </Container>
          : <Container>
            <CitationPosition>
              <Citation
                getRandomQuoteThunk={getRandomQuoteThunk}
                citation={citation}
                author={author}
              />
            </CitationPosition>
            <MainWidgetPosition>
              <MainWidget
                toggle={toggle}
                setToggle={setToggle}
                city={city}
                cityCode={cityCode}
              />
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
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${backgroundImg});
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