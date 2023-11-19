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
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${(props) =>
    props.layout ||
    "row"}; // This reverses the direction, so that every other image card is on the right side of the text or the left

  img {
    width: 50%;
  }

  > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
