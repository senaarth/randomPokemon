import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2.5rem;
    height: 20rem;
    width: 100%;
    background-color: white;
    border-radius: 1rem;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    position: relative !important;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    h3 {
        margin-bottom: 1rem;
        color: #3c5aa6;
    }

    div {
        width: 80%;    
        height: unset;
        margin-bottom: 1rem;
        position: relative !important;
    }

    div > div {
        position: unset !important;
        position: relative !important;
        height: 100%;
    }

    div img {
        object-fit: contain;
        width: 100% !important;
        height: unset !important;
        position: relative !important;
    }
`;