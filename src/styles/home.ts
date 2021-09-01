import styled from "styled-components";

export const Main = styled.main`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 25rem;
    position: relative !important;

    img {
        max-width: 20rem !important;
    }

    button {
        background-color: #3c5aa6;
        outline: none;
        border: 0;
        margin-top: 2.5rem;
        border-radius: 0.6rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 60%;

        color: #ffcb05;
        font-weight: 700;
        cursor: pointer;

        transition: filter 0.4s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const Container = styled.div`
    margin-top: 2.5rem;
    height: 20rem;
    width: 100%;
    background-color: white;
    border-radius: 1rem;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;