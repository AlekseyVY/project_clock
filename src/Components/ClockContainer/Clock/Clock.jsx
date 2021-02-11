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
  margin-left: 11px;
  font-size: 40px;
  font-weight: lighter;
  color: #FFF;
  line-height: 70px;
`;


const ClockStyle = styled.div`
  font-size: 200px;
  font-weight: bold;
  color: #FFF;
  letter-spacing: -5px;
  line-height: 200px;
  `;