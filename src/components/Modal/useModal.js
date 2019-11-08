import { useContext } from 'react';
import _ from 'lodash';

import { ModalContext } from './ModalContext';

function useModal(id) {
  const dialogContext = useContext(ModalContext);

  const args = _.get(dialogContext, ['state', id, 'args'], {});

  return {
    openModal: dialogContext.openModal,
    closeModal: dialogContext.closeModal,
    args,
  };
}

export { useModal };

