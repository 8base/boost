import React, { Component } from 'react';

import { Provider } from './ModalContext';

class ModalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openModal = (id, args = {}) => {
    this.setState({
      [id]: {
        isOpen: true,
        args,
      },
    });
  };

  closeModal = (id) => {
    this.setState({
      [id]: {
        isOpen: false,
      },
    });
  }

  collectContextValue = () => ({
    openModal: this.openModal,
    closeModal: this.closeModal,
    state: this.state,
  });

  render() {
    const contextValue = this.collectContextValue();

    return (
      <Provider value={ contextValue }>
        { this.props.children }
      </Provider>
    );
  }
}

export { ModalProvider };

