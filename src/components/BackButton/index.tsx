import React from 'react';
import Image from 'next/image';
import ArrowBack from '../../assets/arrow_back.svg'

import {
    Container,
    Button
} from './styles';

export function BackButton({onClick}: {onClick: () => void}){
    return(
        <Container>
            <Button onClick={() => onClick()}>
                <Image src={ArrowBack} alt='back'/>
            </Button>
        </Container>
    );
}