import {
  StyledCardWrapper,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";

const Card = (color) => {
  return (
    <StyledCardWrapper>
      <StyledCardHeaderContainer>
        <StyledCardHeader>Header</StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider></StyledDivider>
      <StyledCardContentContainer>
        <StyledCardContentHeader>Secondary card title</StyledCardContentHeader>
        <StyledCardContentParagraph>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

export default Card;
