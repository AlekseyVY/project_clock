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
  height: 12.5rem;
  display: flex;
  color: #FFFFFF;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: left;
  
`;

const TextContainer = styled.div`
  max-width: 54rem;
  height: 8.4rem;
`;

const HiddenSeparator = styled.div`
  height: 1.3rem;
  padding: 0;
  margin: 0;
`;

const RefreshImage = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  color: #FFF;
  margin-top: 1rem;
  margin-left: 1.6rem;
  &:hover {
    cursor: pointer;
    -webkit-transition-duration: 3s;
    -moz-transition-duration: 3s;
    -o-transition-duration: 3s;
    transition-duration: 3s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform;
    transform: rotate(360deg);
  }
`;

const CitationText = styled.div`
  padding: 0;
  margin: 0;
  font-weight: bold;
  `;