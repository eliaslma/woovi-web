import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 18px;
    margin-top: 20px;
`;

export const QuoteTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const QuoteInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const QuoteTitle = styled.text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 18px;
    font-weight: 500;
`;

export const QuoteValue = styled.text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 18px;
    font-weight: 800;
`;

export const LineWrapper = styled.div`
    position: relative;
    left: 7px;
`;

export const QuoteWrapper = styled.div``;