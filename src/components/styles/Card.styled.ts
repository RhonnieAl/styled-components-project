import styled from "styled-components";

interface StyledCardProps {
  layout?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 40px auto; // Changed to auto to center the cards & maintain the vertical spacing
  padding: 60px;
  max-width: 70%; // Added this to limit the width of the cards. They were too wide on Desktop
  flex-direction: ${(props) =>
    props.layout ||
    "row"}; // This reverses the direction, so that every other image card is on the right side of the text or the left

  img {
    width: 80%;
  }

  > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    max-width: 100%; // Added this b/c I prefer the cards to be 100% width on mobile
  }
`;
