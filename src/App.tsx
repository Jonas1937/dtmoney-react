import { Dashboard } from "./components/dashboard";
import Modal from 'react-modal';
import {useState} from 'react';
import { Header } from "./components/Header";
import { Summary } from "./components/summary";
import { GlobalStyle } from "./styles/globals";
import { NewTransactionModal } from "./components/newtransactionmodal";


Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setisNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
      setisNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} CloseModal={handleCloseNewTransactionModal}></NewTransactionModal>
      <GlobalStyle />
    </>
  );
}

