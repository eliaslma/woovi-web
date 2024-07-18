import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IdentifierTitle = styled.text`
    color: ${({ theme }) => theme.colors.gray_50};
    font-size: 14px;
    font-weight: 500;
`;

export const IdentifierHash = styled.text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 14px;
    font-weight: 800;
`;