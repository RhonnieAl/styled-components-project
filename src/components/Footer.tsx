import styled from "styled-components";
import { Container, Flex } from "./styles";

export const Footer = () => {
  return (
    <div>
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
          {/* Social Icons */}
        </Flex>
        <p>&copy; 2023 HUddle. All rights reserved</p>
      </Container>
    </div>
  );
};
