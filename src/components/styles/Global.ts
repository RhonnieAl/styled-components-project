// This is the global styling for the app

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.color.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    transition: all 0.25s linear;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100%;
}

`;
