import React from 'react';
import { Modal, ModalContext, Button } from '../../';

const CustomBackground = ({ children }) => (
  <div style={{ backgroundColor: '#fff', padding: '10px' }}>{children}</div>
);

export default {
  title: 'Components/Modal',
};

export const defaultStory = () => (
  <Modal isOpen data-e2e-id="default-modal">
    <CustomBackground>
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
      XXXXXXXXXX
      <br />
    </CustomBackground>
  </Modal>
);

defaultStory.story = {
  name: 'default',
};

export const withMultipleModals = () => (
  <React.Fragment>
    <Modal isOpen>
      <CustomBackground>
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
        XXXXXXXXXX
        <br />
      </CustomBackground>
    </Modal>
    <Modal isOpen data-e2e-id="multiple-modal">
      <CustomBackground>
        00000
        <br />
        00000
        <br />
        00000
        <br />
        00000
        <br />
        00000
        <br />
      </CustomBackground>
    </Modal>
  </React.Fragment>
);

withMultipleModals.story = {
  name: 'with multiple modals',
};

export const withState = () => (
  <React.Fragment>
    <Modal id="ID">
      {({ args }) => (
        <CustomBackground>
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXX{args.foo}XXXX
          <br />
          XXXX{args.bar}XXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
        </CustomBackground>
      )}
    </Modal>
    <ModalContext.Consumer>
      {({ openModal }) => (
        <Button onClick={() => openModal('ID', { foo: '00', bar: '00' })}>Open</Button>
      )}
    </ModalContext.Consumer>
  </React.Fragment>
);

withState.story = {
  name: 'with state',
};
