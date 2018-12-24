import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';
import { injectGlobal } from 'emotion';

import { createStyledTag, createComponentTheme } from '../../utils';
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

const MODAL_BLUR_CLASS = 'modal-blur';

injectGlobal`
  body.${MODAL_BLUR_CLASS} {
    #root {
      filter: blur(3px);
    }
  }
`;

const name = 'modal';

const themeOverlay = createComponentTheme(`${name}Overlay`, ({ Z_INDEX }: *) => ({
  background: 'rgba(60, 87, 118, 0.6)',
  zIndex: Z_INDEX.MODAL,
}));

const theme = {
  ...themeOverlay,
};

const OverlayTag = createStyledTag(`${name}Overlay`, {
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
});
OverlayTag.displayName = 'OverlayTag';

const ModalTag = createStyledTag(name, {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

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
          <OverlayTag tagName="div" onMouseDown={ this.onOverlayMouseDown }>
            <ModalTag tagName="div" onMouseDown={ this.onModalMouseDown }>
              { typeof children === 'function' ? children(rest) : children }
            </ModalTag>
          </OverlayTag>
        </Portal>
      </If>
    );
  }
}

Modal = withModalState(Modal);

export { Modal, theme };

