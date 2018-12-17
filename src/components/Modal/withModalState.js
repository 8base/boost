import React from 'react';

import { ModalContext } from './ModalContext';

const withModalState = (BaseComponent) => {
  class ModalStateConsumer extends React.Component {
    renderBaseComponentWithModalProps = (modalContext) => {
      const { id } = this.props;

      const props = {
        onClose: () => modalContext.closeModal(id),
        ...this.props,
        isOpen: modalContext.state[id] ? modalContext.state[id].isOpen : false,
        args: modalContext.state[id] ? modalContext.state[id].args : undefined,
      };

      return <BaseComponent { ...props } />;
    }

    render() {
      const { id, ...rest } = this.props;

      if (id) {
        return <ModalContext.Consumer>{ this.renderBaseComponentWithModalProps }</ModalContext.Consumer>;
      }

      return <BaseComponent { ...rest } />;
    }
  }

  return ModalStateConsumer;
};

export { withModalState };
