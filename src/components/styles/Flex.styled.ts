import styled from "styled-components";

// This is a Flexbox component that aligns things side by side (used in teh Hero)
export const Flex = styled.div`
  display: flex;
  align-items: center;

  // Any direct div or ul children will be set to flex: 1
  // This basically sets the columns of the Hero
  & > div,
  & > ul {
    flex: 1;
  }

  // Add Responsiveness. This is the media query for mobile.
  // If the screen is smaller than the theme.mobile size, then the flex-direction will be column
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
