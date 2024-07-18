import React from 'react';
import CheckedIcon from '../../assets/checked-icon.svg'
import Ellipse from '../../assets/ellipse.svg'
import EllipsePay from '../../assets/ellipse-pay.svg'
import Image from 'next/image';
import Line from '../../assets/line.svg'

import {
    Container,
    QuoteWrapper,
    QuoteTitleWrapper,
    QuoteInfo,
    QuoteTitle,
    QuoteValue,
    LineWrapper
} from './styles';

export function QuotesList({ params, firstQuotePay }: { params: any, firstQuotePay?: boolean }) {

    return (
        <Container>
            {Array.from({ length: params.quote }).map((_, index) => (
                
                <QuoteWrapper key={`quote_${index}`}>
                    <QuoteInfo>
                        {index === 0 ?
                            <QuoteTitleWrapper>
                                {firstQuotePay ?
                                    <Image
                                        src={CheckedIcon} alt='checked icon' width={16} height={16} /> :
                                    <Image src={EllipsePay} alt='' />}
                                {params.quote === 1 ? <QuoteTitle>Pix à vista</QuoteTitle> : <QuoteTitle>1ª entrada no Pix</QuoteTitle>}
                            </QuoteTitleWrapper>
                            : <QuoteTitleWrapper>
                                {firstQuotePay ? <Image src={EllipsePay} alt='' /> : <Image src={Ellipse} alt='' />}
                                <QuoteTitle>{index + 1}ª no cartão</QuoteTitle>
                            </QuoteTitleWrapper>
                        }
                        <QuoteValue>{params.quote_value}</QuoteValue>
                    </QuoteInfo>
                    {index != params.quote - 1
                        && <LineWrapper><Image src={Line} alt='' height={15} style={{ position: 'relative'}} /></LineWrapper>}
                </QuoteWrapper>
            ))}
        </Container>
    );
}