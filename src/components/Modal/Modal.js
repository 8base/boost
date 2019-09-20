import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';

import { ModalTag, OverlayTag } from './Modal.theme';
import { withModalState } from './withModalState';

type ModalProps = {
  children: React$Node,
  isOpen?: boolean,
  onClose?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
  shouldCloseOnEscPress?: boolean,
  id?: string,
};

type ModalState = {};

const ESCAPE_KEY = 'Escape';


class Modal extends PureComponent<ModalProps, ModalState> {
  static openedModals: number = 0;

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEscPress: true,
    isOpen: false,
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.addEscPressEventListener();
    }
  }

  componentWillUnmount() {
    this.removeEscPressEventListener();
  }

  onClose = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  addEscPressEventListener = () => {
    document.addEventListener('keydown', this.onDocumentKeyPress);
  }

  removeEscPressEventListener = () => {
    document.removeEventListener('keydown', this.onDocumentKeyPress);
  }

  onDocumentKeyPress = (event) => {
    if (this.props.shouldCloseOnEscPress && event.key === ESCAPE_KEY) {
      this.onClose();
    }
  };

  onOverlayMouseDown = () => {
    if (this.props.shouldCloseOnOverlayClick) {
      this.onClose();
    }
  };

  onModalMouseDown = (event) => {
    event.stopPropagation();
  };

  render() {
    const { children, isOpen, ...rest } = this.props;

    return (
      <If condition={ isOpen }>
        <Portal>
          <OverlayTag
            modifiers={ rest }
            tagName="div"
            onMouseDown={ this.onOverlayMouseDown }
            data-e2e-id={ rest['data-e2e-id'] }
          >
            <ModalTag
              modifiers={ rest }
              tagName="div"
              onMouseDown={ this.onOverlayMouseDown }
            >
              { typeof children === 'function' ? children(rest) : children }
            </ModalTag>
          </OverlayTag>
        </Portal>
      </If>
    );
  }
}

Modal = withModalState(Modal);

export { Modal };

