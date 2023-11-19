import React from "react";
import { Flex, Button, Container } from "./styles";

export const Hero = () => {
  return (
    <Container>
      <Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button>Get Started For Free</Button>
        </div>
        <img src="/illustration-mockups.svg" alt="mockups" />
      </Flex>
    </Container>
  );
};
