import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  padding: 30px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

// max-width: 1200px;
// margin: 0 auto;
// padding: 20px 0;

export const Logo = styled.img``;

export const Image = styled.img`
  width: 35%;
  height: auto;
  max-width: 50%;
  margin: 0 auto;
  display: block;
`;
