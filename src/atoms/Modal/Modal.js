import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';
import { injectGlobal } from 'emotion';

import { createStyledTag, createTheme } from '../../utils';

type ModalProps = {
  children: React$Node,
  isOpen?: boolean,
  onOpen?: (any) => void,
  onClose?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
};

type ModalState = {
  isOpen: boolean,
  blurred: boolean,
};

const MODAL_BLUR_CLASS = 'modal-blur';

injectGlobal`
  body.${MODAL_BLUR_CLASS} {
    #root {
      filter: blur(3px);
    }
  }
`;

const name = 'modal';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const OverlayTag = createStyledTag(name, {
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 1000,
});

const ModalTag = createStyledTag(name, {});

class Modal extends PureComponent<ModalProps, ModalState> {
  static openedModals: number = 0;

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    isOpen: false,
  };

  state = {
    isOpen: false,
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('isOpen' in nextProps) {
      if (nextProps.isOpen) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  openModal() {
    if (!this.state.isOpen) {
      Modal.openedModals += 1;

      this.setState({ isOpen: true });

      if (typeof this.props.onOpen === 'function') {
        this.props.onOpen();
      }

      this.updateBlurClass();
    }
  }

  closeModal() {
    if (this.state.isOpen) {
      Modal.openedModals -= 1;

      this.setState({ isOpen: false });

      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }

      this.updateBlurClass();
    }
  }

  updateBlurClass() {
    if (Modal.openedModals === 0) {
      this.removeBlurClass();
    } else if (Modal.openedModals > 0) {
      this.addBlurClass();
    }
  }

  addBlurClass() {
    if (!document.body.classList.contains(MODAL_BLUR_CLASS)) {
      document.body.classList.add(MODAL_BLUR_CLASS);
    }
  }

  removeBlurClass() {
    if (document.body.classList.contains(MODAL_BLUR_CLASS)) {
      document.body.classList.remove(MODAL_BLUR_CLASS);
    }
  }

  onOverlayMouseDown = () => {
    if (this.props.shouldCloseOnOverlayClick) {
      this.closeModal();
    }
  };

  onModalMouseDown = (event) => {
    event.stopPropagation();
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <If condition={ isOpen }>
        <Portal>
          <OverlayTag tagName="div" onMouseDown={ this.onOverlayMouseDown }>
            <ModalTag tagName="div" onMouseDown={ this.onModalMouseDown }>
              { children }
            </ModalTag>
          </OverlayTag>
        </Portal>
      </If>
    );
  }
}

export { Modal, theme };
