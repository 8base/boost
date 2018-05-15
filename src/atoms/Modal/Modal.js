import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';

import { createStyledTag, createTheme } from 'utils';

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
  static defaultProps = {
    shouldCloseOnOverlayClick: true,
    isOpen: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    if (this.state.isOpen) {
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
      this.setState({ isOpen: true });

      if (typeof this.props.onOpen === 'function') {
        this.props.onOpen();
      }
    }
  }

  closeModal() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });

      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
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
