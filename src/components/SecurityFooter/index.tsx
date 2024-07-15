import React from 'react';
import Image from 'next/image';
import Secure from '../../assets/secure.svg';
import WoovyLogo from '../../assets/woovi-secondary-logo.svg';

import {
    Container,
    SecurityText
} from './styles';

export function SecurityFooter(){
    return(
        <Container>
            <Image src={Secure} alt='' />
            <SecurityText>Pagamento 100% seguro via:</SecurityText>
            <Image src={WoovyLogo} alt='' />
        </Container>
    );
}