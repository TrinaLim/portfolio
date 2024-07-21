import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;  /* Changed from height to min-height */
    padding-top: 85px;
    text-align: center;
    background: #EDE8F5;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px; 
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 15px;
    border: 1px solid black;
    height: 600px; 
    overflow-y: auto; 
`;

export const Image = styled.img`
    max-width: 60%;
    height: auto;
    margin-bottom: 10px; 
    border: 5px solid black;
    border-radius: 8px;
`;

export const Text = styled.div`
    font-size: 18px;
    color: #333;
    font-family: "Comic Sans MS", 'Times New Roman', sans-serif;
`;
