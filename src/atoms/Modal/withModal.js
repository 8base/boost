import React from 'react';

import { ModalContext } from './ModalContext';

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
      return <ModalContext.Consumer>{ this.renderBaseComponent }</ModalContext.Consumer>;
    }
  }

  return ModalStateConsumer;
};

export { withModal };
