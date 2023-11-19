import React from "react";
import { ThemeProvider } from "styled-components";
import { MainHeader, Hero } from "../src/components";
import { Container, GlobalStyles } from "../src/components/styles/index";

const theme = {
  color: {
    header: " #fff1e5",
    body: "#fff1e5",
    footer: "#003333",
    button: "#fcc891",
    text: "#003333",
    buttonText: "#003333",
    buttonHover: "#ff8c00",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainHeader />
        <Hero />
        <Container>
          <h1>This is the header</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
