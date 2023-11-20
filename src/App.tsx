import React from "react";
import { ThemeProvider } from "styled-components";
import { Card, MainHeader, Hero, Footer } from "../src/components";
import { Container, GlobalStyles } from "../src/components/styles/index";
import content from "./content";

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
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainHeader />
        <Hero />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
