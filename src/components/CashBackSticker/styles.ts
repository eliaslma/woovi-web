import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #133A6F;
    padding: 0px 0px 0px 5px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const CashBackValueTitle = styled.text`
    color: #FFFFFF;
`;

export const CashBackValueStrong = styled.text`
    color: #FFFFFF;
    font-weight: 800;
    font-size: 16px;
`;

export const CashBackContentWrapper = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;


export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; 
  border-right: 21px solid white;
`;