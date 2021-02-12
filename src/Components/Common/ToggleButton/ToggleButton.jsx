import styled from "styled-components";
import arrowIcon from '../../../resources/desktop/icon-arrow-up.svg';

const ToggleButton = ({toggle, setToggle}) => {


  return (
    <ToggleContainer>
      <ToggleText>
        {toggle ? 'LESS' : 'MORE'}
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
  width: 14.6rem;
  height: 5.6rem;
  background-color: #FFF;
  border-radius: 2.8rem;
  margin-bottom: 9.8rem;
  margin-right: 16.5rem;
  display: flex;
  `;

const ToggleText = styled.div`
  font-size: 1.6rem;
  letter-spacing: 0.5rem;
  line-height: 2.8rem;
  color: #000000;
  width: 6.3rem;
  height: 2.8rem;
  margin: 1.5rem 1.3rem 1.6rem 2.1rem;
  `;

const ToggleButtonStyle = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0.8rem 0.9rem 0.8rem 0;
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