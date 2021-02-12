import styled from "styled-components";


const ExpandWidget = ({timeZone, dayOfTheYear, dayOfTheWeek, weekNumber}) => {

  return (
    <ExpandWidgetContainer>
      <WidgetContainer>
        <LeftSideData>
          <CurrentTimezoneContainer>
            <CurrentTimezoneLogo>
              CURRENT TIMEZONE
            </CurrentTimezoneLogo>
            <CurrentTimezoneData>
              {timeZone}
            </CurrentTimezoneData>
          </CurrentTimezoneContainer>
          <DayOfTheYearContainer>
            <DayOfTheYearLogo>
              Day of the year
            </DayOfTheYearLogo>
            <DayOfTheYearData>
              {dayOfTheYear}
            </DayOfTheYearData>
          </DayOfTheYearContainer>
        </LeftSideData>
        <RightSideData>
          <DayOfWeekContainer>
            <DayOfWeekLogo>
              Day of the week
            </DayOfWeekLogo>
            <DayOfWeekData>
              {dayOfTheWeek}
            </DayOfWeekData>
          </DayOfWeekContainer>
          <WeekNumberContainer>
            <WeekNumberLogo>
              Week number
            </WeekNumberLogo>
            <WeekNumberData>
              {weekNumber}
            </WeekNumberData>
          </WeekNumberContainer>
        </RightSideData>
      </WidgetContainer>
    </ExpandWidgetContainer>
  )
}


export default ExpandWidget;


const ExpandWidgetContainer = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #979797;
  `;


const WidgetContainer = styled.div`
  width: 84.4rem;
  height: 25.2rem;
  margin-top: 7.4rem;
  margin-left: 16.5rem;
  display: flex;
  `;

const CurrentTimezoneContainer = styled.div`
  height: 10.5rem;
  width: 42.3rem;
  margin-bottom: 4.2rem;
  `;

const CurrentTimezoneLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 0.9rem;
  `;

const CurrentTimezoneData = styled.div`
  font-size: 5.6rem;
  letter-spacing: 0;
  font-weight: bold;
  color: #303030;
  `;

const LeftSideData = styled.div`
  display: flex;
  width: 57rem;
  flex-direction: column;
  border-right: 0.2rem solid #303030;
  `;

const DayOfTheYearContainer = styled.div`
  width: 17.6rem;
  height: 10.5rem
  `;

const DayOfTheYearLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
  `;

const DayOfTheYearData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  color: #303030;
  `;


const RightSideData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9.4rem;
  `;


const DayOfWeekContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #303030;
  `;

const DayOfWeekLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
  `;

const DayOfWeekData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  `;


const WeekNumberContainer = styled.div`
  color: #303030;
  `;

const WeekNumberLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
  `;

const WeekNumberData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  `;