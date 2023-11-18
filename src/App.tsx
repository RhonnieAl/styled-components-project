import React from "react";
import { ThemeProvider } from "styled-components";
import { MainHeader } from "../src/components/Header";
import { Container, GlobalStyles } from "../src/components/styles/index";

const theme = {
  color: {
    header: " #fff1e5",
    body: "#fff1e5",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainHeader />
        <Container>
          <h1>This is the header</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
