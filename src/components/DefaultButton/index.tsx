import React from 'react';
import { CircularProgress } from '@mui/material';

import {
    Container
} from './styles';

export function DefaultButton({title, onClick, isLoading}: {title: string, onClick: () => void, isLoading?: boolean}){
    return(
        <Container onClick={onClick}>
            {title}
            {isLoading && <CircularProgress size={18} sx={{ color: 'white' }} />}
        </Container>
    );
}