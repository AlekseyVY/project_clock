import styled from "styled-components";
import arrowIcon from '../../../resources/desktop/icon-arrow-up.svg';

const ToggleButton = ({toggle, setToggle}) => {


  return (
    <ToggleContainer>
      <ToggleText>
        {toggle ? "LESS" : 'MORE'}
      </ToggleText>
      <ToggleButtonStyle>
        {toggle
          ? <ArrowIcon onClick={() => setToggle(!toggle)} src={arrowIcon} alt={'arrow icon'}/>
          : <ArrowIconActive onClick={() => setToggle(!toggle)} src={arrowIcon} alt={'arrow icon'}/>
        }
      </ToggleButtonStyle>
    </ToggleContainer>
  )
}


export default ToggleButton;

const ToggleContainer = styled.div`
  width: 146px;
  height: 56px;
  background-color: #FFF;
  border-radius: 28px;
  margin-bottom: 98px;
  margin-right: 165px;
  display: flex;
  `;

const ToggleText = styled.div`
  font-size: 16px;
  letter-spacing: 5px;
  line-height: 28px;
  color: #000000;
  width: 63px;
  height: 28px;
  margin: 15px 13px 16px 21px;
  `;

const ToggleButtonStyle = styled.div`
  width: 40px;
  height: 40px;
  margin: 8px 9px 8px 0;
  `;

const ArrowIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
  `;


const ArrowIconActive = styled.img`
  transform: rotate(180deg);
  &:hover {
    cursor: pointer;
  }
  `;