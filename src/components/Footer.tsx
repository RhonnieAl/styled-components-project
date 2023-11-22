import { Container, Flex, StyledFooter } from "./styles";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="/logo_white.svg" alt="footer_logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at
              repellendus voluptate. Voluptatem aspernatur quod incidunt animi,
              tempore alias necessitatibus odit provident ipsam praesentium quo
              eum ipsum nulla? Consequatur, ut.
            </li>
            <li>+358 123 456 789</li>
            <li>support@example.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contanct Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2023 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};
