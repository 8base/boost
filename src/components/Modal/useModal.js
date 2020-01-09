import { useContext } from 'react';
import _ from 'lodash';

import { ModalContext } from './ModalContext';

function useModal(id) {
  const dialogContext = useContext(ModalContext);

  const args = _.get(dialogContext, ['state', id, 'args'], {});
  const isOpen = _.get(dialogContext, ['state', id, 'isOpen'], false);

  return {
    openModal: dialogContext.openModal,
    closeModal: dialogContext.closeModal,
    args,
    isOpen,
  };
}

export { useModal };

