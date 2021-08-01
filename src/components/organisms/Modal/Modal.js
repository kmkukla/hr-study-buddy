import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleCloseModal, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <Button onClick={handleCloseModal}>Close Modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
