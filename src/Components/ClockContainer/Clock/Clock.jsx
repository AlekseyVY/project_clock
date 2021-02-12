import {clockHelper} from "../../../helpers/helper";
import styled from "styled-components";


const Clock = ({ hours, minutes}) => {

  const timeLoc = 'BST'
  return (
    <ClockContainer>
      <ClockStyle>
        {clockHelper(hours)}:{clockHelper(minutes)}
      </ClockStyle>
      <ShortTimePos>
        <div/>
        <ShortTime>
          {timeLoc}
        </ShortTime>
      </ShortTimePos>
    </ClockContainer>
  )
}



export default Clock;


const ClockContainer = styled.div`
  display: flex;
`;

const ShortTimePos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShortTime = styled.div`
  margin-left: 1.1rem;
  font-size: 4rem;
  font-weight: lighter;
  color: #FFF;
  line-height: 7rem;
  @media (max-width: 769px) {
    font-size: 3.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 2.8rem;
  }
`;


const ClockStyle = styled.div`
  font-size: 20rem;
  font-weight: bold;
  color: #FFF;
  letter-spacing: -0.5rem;
  line-height: 20rem;
  @media (max-width: 769px) {
    font-size: 17.5rem;
    letter-spacing: -0.438rem;
    line-height: 17.5rem;
  }
  @media (max-width: 375px) {
    font-size: 10rem;
    letter-spacing: -0.25rem;
    line-height: 10rem;
  }
  `;