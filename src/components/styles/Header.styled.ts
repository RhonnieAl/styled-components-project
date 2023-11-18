import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  padding: 0 20px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;
