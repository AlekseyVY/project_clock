import styled from "styled-components";




const ExpandWidget = ({timeZone, dayOfTheYear, dayOfTheWeek, weekNumber, time}) => {
  let bgColor = '#979797'
  let textColor = '#303030'

  if(!time){
    bgColor = '#000'
    textColor = '#FFF'
  }

  const ExpandWidgetContainer = styled.div`
  width: 100%;
  height: 40rem;
  background-color: ${bgColor};
  opacity: 75%;
    @media (max-width: 769px) {
      height: 44rem;
    }
  `;

  const WeekNumberContainer = styled.div`
  color: ${textColor};
    @media (max-width: 375px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
    }
  `;

  const CurrentTimezoneData = styled.div`
  font-size: 5.6rem;
  letter-spacing: 0;
  font-weight: bold;
  color: ${textColor};
    @media (max-width: 769px) {
      font-size: 4rem;
    }
    @media (max-width: 375px) {
      font-size: 2rem;
      margin-right: 2.6rem;
    }
  `;

  const DayOfTheYearData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  color: ${textColor};
    @media (max-width: 769px) {
      font-size: 4rem;
    }
    @media (max-width: 375px) {
      font-size: 2rem;
      margin-right: 2.6rem;
    }
  `;
  const WeekNumberLogo = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    line-height: 2.8rem;
    color: ${textColor};
    @media (max-width: 375px) {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      margin-left: 2.6rem;
    }
  `;

  const DayOfWeekContainer = styled.div`
  width: 100%;
  color: ${textColor};
    @media (max-width: 375px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
    }
  `;


  const WidgetContainer = styled.div`
    width: 84.4rem;
    height: 25.2rem;
    margin-top: 7.4rem;
    margin-left: 16.5rem;
    display: flex;
    color: ${textColor};
    @media (max-width: 769px) {
      width: 100%;
      margin: 1rem 0.5rem 0;
    }
    @media (max-width: 375px) {
      width: 37.5rem;
      height: 25.6rem;
      margin: 0;
      flex-direction: column;
    }
  `;

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






const CurrentTimezoneContainer = styled.div`
  height: 10.5rem;
  width: 42.3rem;
  margin-bottom: 4.2rem;
  @media (max-width: 769px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 375px) {
    margin: 3rem 0 0;
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }
`;

const CurrentTimezoneLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 0.9rem;
  @media (max-width: 375px) {
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-left: 2.6rem;
    margin-bottom: 0;
  }
  `;



const LeftSideData = styled.div`
  display: flex;
  width: 57rem;
  flex-direction: column;
  border-right: 0.2rem solid #303030;
  @media (max-width: 769px) {
    border: none;
    width: auto;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
  }
  `;

const DayOfTheYearContainer = styled.div`
  width: 17.6rem;
  height: 10.5rem;
  @media (max-width: 769px) {
    width: 100%;
    height: auto;
}
  @media (max-width: 375px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
  }
  `;

const DayOfTheYearLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
  @media (max-width: 375px) {
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-left: 2.6rem;
  }
  `;




const RightSideData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9.4rem;
  @media (max-width: 769px) {
    margin: 0;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
  }
  `;




const DayOfWeekLogo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 2.8rem;
  @media (max-width: 375px) {
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-left: 2.6rem;
  }
  `;

const DayOfWeekData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  @media (max-width: 769px) {
    font-size: 4rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
    margin-right: 2.6rem;
  }
  `;






const WeekNumberData = styled.div`
  font-size: 5.6rem;
  font-weight: bold;
  @media (max-width: 769px) {
    font-size: 4rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
    margin-right: 2.6rem;
  }
  `;