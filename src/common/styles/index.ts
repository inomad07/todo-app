import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nav = styled.div`
    background-color: skyblue;
    padding: 15px;
`;

export const Title = styled.div`
    text-align: center;
    color: #FFFF;
`;

export const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Item = styled.div`
    background-color: whitesmoke;
    margin-bottom: 5px;
    padding: 15px;
`;
