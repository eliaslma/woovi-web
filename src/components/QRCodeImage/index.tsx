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
                value='12kj3lk1j2lj3l1j23jl12k31kj23lj1l23'/>
        </Container>
    );
}