"use client";

import React from 'react';
import { useOption } from '@/hooks/useOption';
import styles from '../page.module.css'
import { Header } from '@/components/Header';
import { QRCodeImage } from '@/components/QRCodeImage';
import { BackButton } from '@/components/BackButton';
import { PaymentTerm } from '@/components/PaymentTerm';
import { QuotesList } from '@/components/QuotesList';
import { TotalQuotes } from '@/components/TotalQuotes';
import { LineDivider } from '@/components/LineDivider';
import { SecurityFooter } from '@/components/SecurityFooter';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { Container } from './styles';
import { Identifier } from '@/components/Identifier';
import { generateHash } from '@/utils/hashUtils';
import { useRouter } from 'next/navigation';
import QRCodeCopyButton from '@/components/CopyQRCodeButton';

const DetailMethodScreen: React.FC = () => {

    const { selectedOption } = useOption();
    const router = useRouter();

    const hash = generateHash();

    const title = selectedOption?.quote !== 1
        ? `Elias, pague a entrada de ${'\n'} ${selectedOption?.quote_value} pelo Pix`
        : `Elias, pague sua compra de ${'\n'} ${selectedOption?.quote_value} pelo Pix`;

    const showMessage = () => {
        toast('✅ Pagamento confirmado com sucesso!', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const handleSimulatePayment = () => {

        showMessage();

        setTimeout(() => {
            if (selectedOption?.quote === 1) {

            } else {
                router.push('/pay-screen');
            }
        }, 2600);

    }

    const handleGoBack = () => {
        router.back();
    }

    return (
        <main className={styles.main}>
            <Container>
                <BackButton onClick={handleGoBack} />
                <ToastContainer />
                <Header title={title} />
                <QRCodeImage />
                <QRCodeCopyButton onClick={handleSimulatePayment} />
                <PaymentTerm />
                {selectedOption
                    && <QuotesList params={selectedOption} />}
                <LineDivider />
                {selectedOption?.total && <TotalQuotes total={selectedOption.total} />}
                <LineDivider />
                <Identifier hash={hash} />
                <SecurityFooter />
            </Container>
        </main>
    );
};

export default DetailMethodScreen;
