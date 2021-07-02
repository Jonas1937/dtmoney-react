import { useState } from "react";
import Modal from 'react-modal';
import { Container } from "./style";
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean,
    CloseModal: () => void;
}

export function NewTransactionModal({isOpen,CloseModal}: NewTransactionModalProps) {
    
    return (
        <Modal isOpen={isOpen}
        onRequestClose={CloseModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <button onClick={CloseModal} className='modal-close'>
                <img src={closeImg} alt='Fechar'></img>
            </button>
        
        <Container>
            <h2>Cadastrar Transacao</h2>
            <input placeholder='Titulo'></input>

            <input type="number" placeholder='Valor'/>

            <input type="text" placeholder='Categoria'/>
            <button type='submit'>Cadastrar</button>
        </Container>
      </Modal>
    )
}