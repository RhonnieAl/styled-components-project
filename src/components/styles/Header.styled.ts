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

  // Add Responsiveness. This is the media query for mobile.
  // If the screen is smaller than the theme.mobile size, then the flex-direction will be column
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  // Add Responsiveness to the Logo, Add gap on the botton so they don't look like a Sandwich
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 25px;
  }
`;

export const Image = styled.img`
  width: 35%;
  height: auto;
  max-width: 50%;
  margin: 0 auto;
  display: block;

  // Add Responsiveness. This is the media query for mobile. If the screen is smaller than the theme.mobile size,
  // then the Hero image will be spaced from the rest of the text by...
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 40px;
    width: 100%;
    max-width: 80%;
  }
`;
