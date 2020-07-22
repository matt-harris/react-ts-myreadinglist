import React, { useRef } from 'react';
import Portal, { PortalTarget } from './Portal';
import styled from 'styled-components';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.modalOverlay};
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  width: 80%;
  margin: 0 10%;
  padding: 2rem;
  background-color: ${(props) => props.theme.modalBox};
  cursor: auto;

  @media screen and (min-width: 48rem) {
    max-width: 37.5rem;
    margin: 0 1.5rem;
  }
`;

const ModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
`;

const ModalContent = styled.div`
  margin-top: 1.5rem;

  p {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ModalClose = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

interface ModalProps {
  title: string;
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, showModal, closeModal, children }) => {
  const overlayref = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayref.current) {
      closeModal();
    }
  };

  return showModal ? (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrap>
        <ModalOverlay ref={overlayref} onClick={handleOverlayClick} />
        <ModalBox>
          <ModalClose onClick={closeModal}>X</ModalClose>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{children}</ModalContent>
        </ModalBox>
      </ModalWrap>
    </Portal>
  ) : null;
};

export default Modal;
