import React from 'react';
import { Modal, ModalContext, Button } from '../../';

const CustomBackground = ({ children }) => (
  <div style={{ backgroundColor: '#fff', padding: '10px' }}>{ children }</div>
);

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const defaultStory = () => {
  return (
    <React.Fragment>
      <Modal id="ID_modal_default" data-e2e-id="default-modal">
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

      <ModalContext.Consumer>
        { ({ openModal }) => (
          <Button onClick={ () => openModal('ID_modal_default') }>Open modal</Button>
        ) }
      </ModalContext.Consumer>
    </React.Fragment>
  );
};

defaultStory.story = {
  name: 'default',
};

export const withMultipleModals = () => (
  <React.Fragment>
    <Modal id="ID_withMultipleModals_first" >
      <CustomBackground>
        First modal
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        XXXXXXXXXXXXXXXXXXXX
        <br />
        <ModalContext.Consumer>
          { ({ openModal }) => (
            <Button onClick={ () => openModal('ID_withMultipleModals_second') }>Open second modal</Button>
          ) }
        </ModalContext.Consumer>
      </CustomBackground>
    </Modal>

    <Modal id="ID_withMultipleModals_second" data-e2e-id="multiple-modal">
      <CustomBackground>
        Second modal
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
    <ModalContext.Consumer>
      { ({ openModal }) => (
        <Button onClick={ () => openModal('ID_withMultipleModals_first') }>Open modal</Button>
      ) }
    </ModalContext.Consumer>
  </React.Fragment>
);

withMultipleModals.story = {
  name: 'with multiple modals',
};

export const withState = () => (
  <React.Fragment>
    <Modal id="ID">
      { ({ args }) => (
        <CustomBackground>
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
          <br />
          XXXX{ args.foo }XXXX
          <br />
          XXXX{ args.bar }XXXX
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
      ) }
    </Modal>
    <ModalContext.Consumer>
      { ({ openModal }) => (
        <Button onClick={ () => openModal('ID', { foo: '00', bar: '00' }) }>Open modal</Button>
      ) }
    </ModalContext.Consumer>
  </React.Fragment>
);

withState.story = {
  name: 'with state',
};
