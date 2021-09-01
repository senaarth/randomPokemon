import styled from "styled-components";

export const Container = styled.div`
    height: 35rem;
    width: 100%;
    background-color: white;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    div {
        width: 80%;    
        height: unset;
        margin-bottom: 1rem;
        position: relative !important;
    }

    div > div {
        position: unset !important;
        position: relative;
        height: 100%;
    }

    div img {
        object-fit: contain;
        width: 100% !important;
        height: unset !important;
        position: relative !important;
    }
`;