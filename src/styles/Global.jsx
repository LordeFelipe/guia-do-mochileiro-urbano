import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .site-content {
        min-height: 100vh;
    }
`