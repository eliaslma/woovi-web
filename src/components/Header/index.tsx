"use client";
import React from 'react';
import logoSvg from '../../assets/Logo.svg';
import Image from 'next/image';
import { BackButton } from '../BackButton';

import {
    Container,
    Title,
} from './styles';

export function Header({ title }: { title: string }) {
    return (
        <Container>
            <Image src={logoSvg} alt="Logo SVG" />
            <Title>
                {title}
            </Title>
        </Container>
    );
}