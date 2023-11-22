import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100px;
  margin: 0 auto 20px; */

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* a {
    border: 1px solid #fafafa;
    border-radius: 50%;
    color: #fafafa;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: nones;
  } */

  a {
    color: white;
    font-size: 2rem;
    margin: 0 10px;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.buttonHover};
    }
  }
`;
