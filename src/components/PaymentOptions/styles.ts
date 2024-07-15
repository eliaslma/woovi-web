import styled, { css } from 'styled-components';

interface OptionContainerProps {
    selected: boolean;
    lastOption?: boolean;
    firstOption?: boolean;
}

export const Container = styled.div`
  width: 429px;
  display: flex;
  justify-content: column;
  flex-direction: column;
  padding: 16px;
`;


export const PaymentOptionsContainer = styled.div`
  flex: 1;
  margin-bottom: 34px;
`;

export const PaymentOptionsTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionContainer = styled.div<OptionContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.selected ? 'rgba(3, 214, 157, 0.05)' : '#fff')};
  border: 1px solid #E5E5E5;


  cursor: pointer;  
    &:hover {
    background: #fafafa;
  }
  
  ${(props) => props.selected && css`
    border: 2px solid #03D69D;
  `};
  
  ${(props) => props.selected && props.lastOption && css`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 2px solid #03D69D;
    border-bottom-color: #03D69D;
  `};

  ${(props) => props.lastOption && css`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `};

  ${(props) => props.firstOption && css`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `};
`;

export const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const OptionTotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const OptionQuote = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.extra_gray};;
  font-weight: 800;
`;

export const OptionQuoteTotal = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.extra_gray};
  font-weight: 500;
`;

export const OptionTotal = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.semi_gray};
  font-weight: 500;
`;

export const OptionCheckbox = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CashbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CashbackText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PaymentOptionsTitleWrapper = styled.div`
  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  top: 9px;
  left: 9px;
  position: relative;
  z-index: 1;
  background-color: #E5E5E5;
  padding: 2px 20px;
`;

export const PaymentOptionsTitle = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.extra_gray};
  font-weight: 800;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  width: 100%;
`;

export const OptionContainerAlt = styled.button``;