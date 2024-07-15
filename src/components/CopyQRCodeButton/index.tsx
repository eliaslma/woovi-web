import React from 'react';
import Copy from '../../assets/copy.svg'
import Image from 'next/image';

import {
    Container,
} from './styles';

const QRCodeCopyButton = ({onClick}: {onClick: () => void}) => {

    return(
        <Container onClick={onClick}>
            Clique para copiar QR CODE
            <Image src={Copy} alt='copy qrcode'/>
        </Container>
    );
}

export default QRCodeCopyButton;