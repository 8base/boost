import React from 'react';

import { Consumer } from './ModalContext';

const withModal = (BaseComponent) => {
  class ModalStateConsumer extends React.Component {
    renderBaseComponent = (dialogContext) => {
      const props = {
        ...this.props,
        openModal: dialogContext.openModal,
        closeModal: dialogContext.closeModal,
      };

      return <BaseComponent { ...props } />;
    }

    render() {
      return <Consumer>{ this.renderBaseComponent }</Consumer>;
    }
  }

  return ModalStateConsumer;
};

export { withModal };
