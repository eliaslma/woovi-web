import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const PaymentTermTitle = styled.text`
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 16px;
    font-weight: 600;
`;

export const PaymentTermContent = styled.text`
    color: ${({ theme }) => theme.colors.extra_gray};
    font-size: 16px;
    font-weight: 800;
`;