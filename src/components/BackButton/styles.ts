import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.gray_100};;
    border-radius: 10px;
    border: none;
    padding: 8px;
    cursor: pointer;
`;