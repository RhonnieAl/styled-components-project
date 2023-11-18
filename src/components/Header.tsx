import React from "react";
import { StyledHeader, Nav, Logo, Button, Container } from "./styles";

export const MainHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/logo.svg" alt="logo" />
          <Button>Try For Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};
