import React from 'react';
import QRCode from 'react-qr-code';

import {
    Container
} from './styles';

export function QRCodeImage(){
    return(
        <Container>
            <QRCode 
                size={350}
                value='ac49fe79b1b6d8498519a410bc9e4d57d52a4b7f'/>
        </Container>
    );
}