import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        background: #8ea6b5;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;