import ClockContainer from "../../../ClockContainer/ClockContainer";
import styled from "styled-components";

const TimeWidget = ({city, cityCode, time}) => {


  return(
    <TimeWidgetContainer>
      <Greet>
        <TimeIcon src={time.icon} alt={'time of the day icon'}/>
        {time.greet}
      </Greet>
      <ClockContainer />
      <Location>
        {city}, {cityCode}
      </Location>
    </TimeWidgetContainer>
  )
}


export default TimeWidget;


const TimeWidgetContainer = styled.div`
  width: 57.5rem;
  height: 28.8rem;
  @media (max-width: 769px) {
    width: auto;
    height: auto;
  }
`;


const Greet = styled.div`
  font-size: 2rem;
  letter-spacing: 0.4rem;
  line-height: 2.8rem;
  color: #FFF;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  @media (max-width: 769px) {
    font-size: 1.8rem;
    letter-spacing: 0.36rem;
  }
`;

const TimeIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.6rem;
`;


const Location = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 0.48rem;
  line-height: 2.8rem;
  color: #FFF;
  margin-top: 1.6rem;
  @media (max-width: 769px) {
    letter-spacing: 0.36rem;
    font-size: 1.8rem;
  }
  `;