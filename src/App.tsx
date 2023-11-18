import React from "react";
import { MainHeader } from "../src/components/Header";
import { Container } from "../src/components/styles/index";

function App() {
  return (
    <>
      <MainHeader />
      <Container>
        <h1>This is the header</h1>
      </Container>
    </>
  );
}

export default App;
