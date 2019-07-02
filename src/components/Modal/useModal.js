import { useContext } from 'react';

import { ModalContext } from './ModalContext';

function useModal() {
  const dialogContext = useContext(ModalContext);

  return {
    openModal: dialogContext.openModal,
    closeModal: dialogContext.closeModal,
  };
}

export { useModal };

