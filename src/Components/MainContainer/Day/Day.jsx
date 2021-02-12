import styled from 'styled-components'
import dayBg from '../../../resources/desktop/bg-image-daytime.jpg'
import nightBg from '../../../resources/desktop/bg-image-nighttime.jpg'
import Citation from "../Citation/Citation";
import MainWidget from "../MainWidget/MainWidget";
import ExpandWidgetContainer from "../../ExpandWidget/ExpandWidgetContainer";
import {useState} from "react";

const Day = ({ citation, author, getRandomQuoteThunk, city, cityCode, time}) => {
  const [toggle, setToggle] = useState(false)

  const Container = styled.div`
  width: 144rem;
  height: 80rem;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${time.isDay ? dayBg : nightBg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
              time={time}
            />
          </MainWidgetPosition>
            <ExpandWidgetContainer/>
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
                time={time}
              />
            </MainWidgetPosition>
          </Container>
      }
    </>

  )
}


export default Day;



const CitationPosition = styled.div`
  margin-top: 5.6rem;
  margin-left: 16.5rem;
`;


const HideCitation = styled.div`
  display: none;
  padding: 0;
  margin: 0;
`;

const MainWidgetPosition = styled.div`
  height: 40rem;
  margin-top: 5.6rem;
  margin-left: 16.5rem;
  `;