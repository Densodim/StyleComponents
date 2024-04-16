import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

    body {
        background-color: antiquewhite;
    }
`;
