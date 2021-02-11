import styled from "styled-components";
import refreshImg from '../../../resources/desktop/icon-refresh.svg';



const Citation = ({ citation, author, getRandomQuoteThunk }) => {
  return(
    <CitationContainer>
      <TextContainer>
        “{citation}”
        <HiddenSeparator/>
        <CitationText>
          {author}
        </CitationText>
      </TextContainer>
      <RefreshImage onClick={() => getRandomQuoteThunk()} src={refreshImg} alt={'refresh button'}/>
    </CitationContainer>
  )
}


export default Citation


const CitationContainer = styled.div`
  width: 573px;
  height: 125px;
  display: flex;
  color: #FFFFFF;
  
  font-size: 18px;
  line-height: 28px;
  text-align: left;
`;

const TextContainer = styled.div`
  width: 540px;
  height: 84px;
`;

const HiddenSeparator = styled.div`
  height: 13px;
  padding: 0;
  margin: 0;
`;

const RefreshImage = styled.img`
  width: 17px;
  height: 17px;
  color: #FFF;
  margin-top: 10px;
  margin-left: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const CitationText = styled.div`
  padding: 0;
  margin: 0;
  font-weight: bold;
  `;