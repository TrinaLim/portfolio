import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding-top: 30px;
    background: #EDE8F5;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
`;

export const Text = styled.div`
    font-size: 18px;
    color: #333;
    font-family: "Comic Sans MS", 'Times New Roman', sans-serif;
    padding: 20px;
`;
