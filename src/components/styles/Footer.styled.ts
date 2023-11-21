import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.footer};
  color: #fff;
  padding: 100px 0 60px;
  /* text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 40px;
  border-top: 1px solid #eee; */

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
