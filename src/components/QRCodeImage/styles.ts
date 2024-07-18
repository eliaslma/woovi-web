import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    display: flex;
    width: 100%;
    max-width: 350px;
`;