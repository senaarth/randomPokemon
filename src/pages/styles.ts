import styled from "styled-components";

export const Main = styled.main`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 25rem;

    button {
        background-color: red;
        outline: none;
        border: 0;
        margin-top: 2rem;
        border-radius: 0.6rem;
        padding: 1rem 0;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 60%;

        color: white;
        font-weight: 700;
        cursor: pointer;

        transition: filter 0.4s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;