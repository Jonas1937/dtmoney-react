import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal} : HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money"/>
               <button onClick={onOpenNewTransactionModal}>Nova Transacao</button>

            </Content>
        </Container>
        )
}