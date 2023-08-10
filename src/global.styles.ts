import { createGlobalStyle } from "styled-components/macro"

export const sizes = {
    tabletBreakPoint: '768px',
    mobileBreakPoint: '567px'
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        padding: 5px 10px;
        border: 1px solid black;
        background-color: black;
        color: white;
        cursor: pointer;
        margin: 0 3px;

        &:hover {
            color: black;
            background-color: white;
        }
    }

    input {
        padding: 5px 10px;
    }

    .error {
        color: red;
        font-weight: 600;
        margin: 10px 0;
    }
`