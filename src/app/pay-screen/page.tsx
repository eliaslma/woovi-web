'use client';
import React from 'react';
import styles from '../page.module.css';
import { Header } from '@/components/Header';
import { Container, InputsWrapper, FormWrapper } from './styles';
import CustomTextField from '@/components/CustomTextField';
import { SelectInputOptions } from '@/components/SelectInputOptions';
import { PaymentTerm } from '@/components/PaymentTerm';
import { useSelectedOption } from '../context/SelectedOptionContext';
import { QuotesList } from '@/components/QuotesList';
import { LineDivider } from '@/components/LineDivider';
import { TotalQuotes } from '@/components/TotalQuotes';
import { Identifier } from '@/components/Identifier';
import { SecurityFooter } from '@/components/SecurityFooter';
import { DefaultButton } from '@/components/DefaultButton';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useState } from 'react';
import { BackButton } from '@/components/BackButton';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { generateHash } from '@/utils/hashUtils';
import { useRouter } from 'next/navigation';

interface FormInputs {
    fullName: string;
    cpf: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
}

const schema = yup.object().shape({
    fullName: yup.string().required('Nome completo é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF deve estar no formato 000.000.000-00'),
    cardNumber: yup.string().required('Número do cartão é obrigatório'),
    expirationDate: yup.string().required('Vencimento é obrigatório').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Vencimento deve estar no formato MM/AA'),
    cvv: yup.string().required('CVV é obrigatório').matches(/^\d{3}$/, 'CVV deve ter 3 dígitos'),
});

const PayScreen: React.FC = () => {

    const { selectedOption } = useSelectedOption();
    const hash = generateHash();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: yupResolver(schema)
    });

    const showMessage = () => {
        toast('✅ Pagamento confirmado com sucesso!', {
            position: "bottom-center",
            autoClose: 4500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
    }

    const onSubmit: SubmitHandler<FormInputs> = data => {

            setIsLoading(true);
            showMessage();
    
            setTimeout(() => {
                if (selectedOption?.quote === 1) {
                    
                } else {
                    router.push('/');
                }
            }, 5000);
    };

    const handleGoBack = () => {
        router.back()
    }

    return (
        <main className={styles.main}>
            <ToastContainer/>
            <Container>
                <BackButton onClick={handleGoBack}/>
                {selectedOption?.quote && <Header title={`Elias, pague o restante em ${selectedOption?.quote - 1}x no ${'\n'} cartão`} />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormWrapper>
                        <CustomTextField
                            name="fullName"
                            control={control}
                            label="Nome completo"
                        />
                        <CustomTextField
                            name="cpf"
                            control={control}
                            label="CPF"
                            formatType="cpf"
                        />
                        <CustomTextField
                            name="cardNumber"
                            control={control}
                            label="Número do cartão"
                            formatType='cardType'
                        />
                        <InputsWrapper>
                            <CustomTextField
                                name="expirationDate"
                                control={control}
                                label="Vencimento"
                                formatType="expirationDate"
                            />
                            <CustomTextField
                                name="cvv"
                                control={control}
                                label="CVV"
                                formatType="cvv"
                            />
                        </InputsWrapper>
                        {selectedOption && <SelectInputOptions quotes={selectedOption.quote} quote_value={selectedOption.quote_value} total_number={selectedOption.total_number} />}
                        
                        <DefaultButton title="Pagar" onClick={handleSubmit(onSubmit)} isLoading={isLoading}/>
                        <PaymentTerm />
                        {selectedOption
                            && <QuotesList params={selectedOption} firstQuotePay />}
                        <LineDivider />
                        {selectedOption?.total && <TotalQuotes total={selectedOption.total} />}
                        <LineDivider />
                        <Identifier hash={hash} />
                        <SecurityFooter />
                    </FormWrapper>
                </form>
            </Container>
        </main>
    );
}

export default PayScreen;
