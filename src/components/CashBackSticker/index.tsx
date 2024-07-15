import React from 'react';

import {
    Container,
    CashBackValueTitle,
    Triangle,
    CashBackContentWrapper,
    CashBackValueStrong
} from './styles';

export function CashBackSticker({ cashBackValue, bestOption }: { cashBackValue?: string | null, bestOption?: true | undefined}){
    return(
        <Container>
            {bestOption ?
                <CashBackContentWrapper>
                    <CashBackValueStrong>-3% de juros: </CashBackValueStrong>
                    <CashBackValueTitle>Melhor opção de parcelamento</CashBackValueTitle>
                </CashBackContentWrapper>
                :
                <CashBackContentWrapper>
                    <CashBackValueStrong>🤑 {cashBackValue} </CashBackValueStrong>
                    <CashBackValueTitle>de volta no seu Pix na hora</CashBackValueTitle>
                </CashBackContentWrapper>}
            <Triangle/>
        </Container>
    );
}