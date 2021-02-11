import ClockContainer from "../../../ClockContainer/ClockContainer";
import styled from "styled-components";
import dayIcon from '../../../../resources/desktop/icon-sun.svg'

const TimeWidget = () => {
  const greet = 'GOOD MORNING, IT’S CURRENTLY'
  const location = 'IN LONDON, UK'

  const daytimeIcon = dayIcon
  return(
    <TimeWidgetContainer>
      <Greet>
        <TimeIcon src={daytimeIcon} alt={'time of the day icon'}/>
        {greet}
      </Greet>
      <ClockContainer />
      <Location>
        {location}
      </Location>
    </TimeWidgetContainer>
  )
}


export default TimeWidget;


const TimeWidgetContainer = styled.div`
  width: 575px;
  height: 288px;
  margin-left: 165px;
  margin-bottom: 98px;
`;


const Greet = styled.div`
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 28px;
  color: #FFF;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TimeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;


const Location = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4.8px;
  line-height: 28px;
  color: #FFF;
  margin-top: 16px;
  `;