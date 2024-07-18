import React from 'react';
import CheckedIcon from '../../assets/checked-icon.svg';
import UncheckedIcon from '../../assets/ellipse-large.svg';
import Image from 'next/image';
import { DefaultButton } from '../DefaultButton';
import { useRouter } from 'next/navigation';
import { useOption } from '@/hooks/useOption';
import { CashBackSticker } from '../CashBackSticker';

import {
    Container,
    PaymentOptionsContainer,
    OptionContainer,
    OptionContent,
    OptionTotal,
    OptionCheckbox,
    OptionTotalWrapper,
    CashbackContainer,
    CashbackText,
    OptionQuote,
    OptionQuoteTotal,
    PaymentOptionsTitle,
    PaymentOptionsTitleWrapper,
    ButtonWrapper,
    PaymentOptionsTopWrapper
} from './styles';

export interface PixQuoteType {
    id: number;
    quote: number;
    quote_value: string;
    total: string;
    cashback?: string;
    cashbackValue?: string;
    bestOption?: boolean;
    total_number: number;
}

const PaymentOptions = () => {

    const { selectedOption, setSelectedOption } = useOption();
    const router = useRouter();

    const paymentOptions: PixQuoteType[] = [
        {
            id: 1,
            quote: 1,
            quote_value: 'R$ 30.500,00',
            total: 'R$ 30.500,00',
            cashback: 'Ganhe 3% de Cashback',
            cashbackValue: 'R$ 300,00',
            total_number: 30500,
        },
        {
            id: 2,
            quote: 2,
            quote_value: 'R$ 15.300,00',
            total: 'R$ 30.600,00',
            total_number: 30600,
        },
        {
            id: 3,
            quote: 3,
            quote_value: 'R$ 10.196,66',
            total: 'R$ 30.620,00',
            total_number: 30620,
        },
        {
            id: 4,
            quote: 4,
            quote_value: 'R$ 7.725,00',
            total: 'R$ 31.500,00',
            bestOption: true,
            cashbackValue: '-3% de juros',
            total_number: 31500,
        },
        {
            id: 5,
            quote: 5,
            quote_value: 'R$ 6.300,00',
            total: 'R$ 30.900,00',
            total_number: 30900,
        },
        {
            id: 6,
            quote: 6,
            quote_value: 'R$ 5.283,33',
            total: 'R$ 31.699,98',
            total_number: 31699,
        },
        {
            id: 7,
            quote: 7,
            quote_value: 'R$ 4.542,85',
            total: 'R$ 31.800,00',
            total_number: 31800,
        },
    ];

    const handleShowPaymentDetails = () => {
        router.push('/detail-method-screen');
    };

    const handleOptionPress = (optionId: number) => {
        const selected = paymentOptions.find(option => option.id === optionId) as PixQuoteType;
        if (selected) {
            setSelectedOption(selected);
        }
    };

    const renderPaymentOptions = (options: PixQuoteType[], title: string, startIndex: number) => (
        <PaymentOptionsContainer>
            <PaymentOptionsTopWrapper>
                <PaymentOptionsTitleWrapper>
                    <PaymentOptionsTitle>{title}</PaymentOptionsTitle>
                </PaymentOptionsTitleWrapper>
            </PaymentOptionsTopWrapper>
            {options.map((option, index) => (
                <OptionContainer
                    key={option.id}
                    onClick={() => handleOptionPress(option.id)}
                    selected={selectedOption?.id === option.id}
                    firstOption={index === 0}
                    lastOption={index === options.length - 1}>
                    <OptionContent>
                        <OptionTotalWrapper>
                            <OptionCheckbox>
                                <OptionQuote>{option.quote}x</OptionQuote>
                                <OptionQuoteTotal>{option.quote_value}</OptionQuoteTotal>
                            </OptionCheckbox>
                            {selectedOption?.id === option.id ? (
                                <Image src={CheckedIcon} alt='checked' />
                            ) : (
                                <Image src={UncheckedIcon} alt='unchecked' />
                            )}
                        </OptionTotalWrapper>

                        {option.total && startIndex != 0 && <OptionTotal>Total: {option.total}</OptionTotal>}

                        <CashbackContainer>
                            {option.cashback && (
                                <CashbackText>{option.cashback}</CashbackText>
                            )}

                            {option.cashbackValue && (
                                <CashBackSticker cashBackValue={option.cashbackValue} bestOption={option.bestOption || undefined} />
                            )}
                        </CashbackContainer>
                    </OptionContent>
                </OptionContainer>
            ))}
        </PaymentOptionsContainer>
    );

    return (
        <Container>
            {renderPaymentOptions([paymentOptions[0]], 'Pix', 0)}
            {renderPaymentOptions(paymentOptions.slice(1), 'Pix Parcelado', 1)}
            {selectedOption && (
                <ButtonWrapper>
                    <DefaultButton title='Continuar' onClick={handleShowPaymentDetails} />
                </ButtonWrapper>
            )}
        </Container>
    );
};

export default PaymentOptions;
