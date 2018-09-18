import React from 'react';

import { Consumer } from './ModalContext';

const withModalState = (BaseComponent) => {
  class ModalStateConsumer extends React.Component {
    renderBaseComponentWithModalProps = (modalContext) => {
      const { id } = this.props;

      const props = {
        ...this.props,
        onClose: () => modalContext.closeModal(id),
        isOpen: modalContext.state[id] ? modalContext.state[id].isOpen : false,
        args: modalContext.state[id] ? modalContext.state[id].args : undefined,
      };

      return <BaseComponent { ...props } />;
    }

    render() {
      const { id, ...rest } = this.props;

      if (id) {
        return <Consumer>{ this.renderBaseComponentWithModalProps }</Consumer>;
      }

      return <BaseComponent { ...rest } />;
    }
  }

  return ModalStateConsumer;
};

export { withModalState };
