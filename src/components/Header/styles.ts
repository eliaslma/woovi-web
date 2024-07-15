import styled from 'styled-components';

export const Container = styled.div`
    max-width: 467px;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 0px;
`;

export const Title = styled.span`
    text-align: center;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.extra_gray};
    font-weight: 800;
`;