import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, border-style, #__next {
        background: linear-gradient(90deg, white 50%, red 50%);
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
`;