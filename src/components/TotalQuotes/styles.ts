import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 19px;
    align-items: center;
`;

export const Total = styled.text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 18px;
    font-weight: 500;
`;

export const Cet = styled.text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 14px;
    font-weight: 500;
`;