import styled from 'styled-components';

export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray_100};
    width: 100%;
`;