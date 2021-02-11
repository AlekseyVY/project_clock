import TimeWidget from "./TimeWidget/TimeWidget";
import ToggleButton from "../../Common/ToggleButton/ToggleButton";
import styled from "styled-components";


const MainWidget = () => {
  return (
    <MainWidgetContainer>
      <TimeWidget />
      <ToggleButtonPos>
        <div/>
        <ToggleButton />
      </ToggleButtonPos>
    </MainWidgetContainer>
  )
}


export default MainWidget;


const MainWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;


const ToggleButtonPos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;