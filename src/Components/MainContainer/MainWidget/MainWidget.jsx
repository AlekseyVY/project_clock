import TimeWidget from "./TimeWidget/TimeWidget";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import styled from "styled-components";


const MainWidget = ({ toggle, setToggle, city, cityCode, time}) => {

  return (
    <MainWidgetContainer>
      <TimeWidget
        city={city}
        cityCode={cityCode}
        time={time}
      />
      <ToggleButtonPos>
        <Hide/>
        <ToggleButton toggle={toggle} setToggle={setToggle}/>
      </ToggleButtonPos>
    </MainWidgetContainer>
  )
}


export default MainWidget;

const Hide = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;

const MainWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 769px) {
    flex-direction: column;
  }
  `;


const ToggleButtonPos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 769px) {
    margin-top: 5rem;
  }
  `;