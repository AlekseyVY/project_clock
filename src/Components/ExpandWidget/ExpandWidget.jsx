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
  height: 400px;
  background-color: #979797;
  `;


const WidgetContainer = styled.div`
  width: 844px;
  height: 252px;
  margin-top: 74px;
  margin-left: 165px;
  display: flex;
  `;

const CurrentTimezoneContainer = styled.div`
  height: 105px;
  width: 423px;
  margin-bottom: 42px;
  `;

const CurrentTimezoneLogo = styled.div`
  font-size: 15px;
  letter-spacing: 3px;
  margin-bottom: 9px;
  `;

const CurrentTimezoneData = styled.div`
  font-size: 56px;
  letter-spacing: 0;
  font-weight: bold;
  color: #303030;
  `;

const LeftSideData = styled.div`
  display: flex;
  width: 570px;
  flex-direction: column;
  border-right: 2px solid #303030;
  `;

const DayOfTheYearContainer = styled.div`
  width: 176px;
  height: 105px
  `;

const DayOfTheYearLogo = styled.div`
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 28px;
  `;

const DayOfTheYearData = styled.div`
  font-size: 56px;
  font-weight: bold;
  color: #303030;
  `;


const RightSideData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 94px;
  `;


const DayOfWeekContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #303030;
  `;

const DayOfWeekLogo = styled.div`
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 28px;
  `;

const DayOfWeekData = styled.div`
  font-size: 56px;
  font-weight: bold;
  `;


const WeekNumberContainer = styled.div`
  color: #303030;
  `;

const WeekNumberLogo = styled.div`
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 28px;
  `;

const WeekNumberData = styled.div`
  font-size: 56px;
  font-weight: bold;
  `;