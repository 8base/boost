// @flow

import * as React from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';
import { ModalProvider } from './ModalProvider';
import { withModal } from './withModal';


describe('<ModalConsumer />', () => {

  const OpenCloseModal = ({ openModal, closeModal }) => (
    <React.Fragment>
      <Button onClick={ () => openModal('ID', { ff: '00' }) } >
        <span className="open-button">Open</span>
      </Button>
      <Button onClick={ () => closeModal('ID') }>
        <span className="close-button">Close</span>
      </Button>
    </React.Fragment>
  );

  it('should open and close modal by modal id', () => {
    const wrapper = mount(
      <ModalProvider>
        <Modal id="ID">
          { ({ args }) => (
            <div className="modal-content">{ args.ff }</div>
          ) }
        </Modal>
        <ModalContext.Consumer>
          {
            ({ openModal, closeModal }) => (
              <OpenCloseModal openModal={ openModal } closeModal={ closeModal } />
            )
          }
        </ModalContext.Consumer>
      </ModalProvider>,
    );

    expect(wrapper.find('.modal-content')).toHaveLength(0);

    wrapper.find('.open-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').text()).toBe('00');

    wrapper.find('.close-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });

  it('should open and close modal by modal id using hoc', () => {
    const OpenCloseModalWrapped = withModal(OpenCloseModal);

    const wrapper = mount(
      <ModalProvider>
        <Modal id="ID">
          { ({ args }) => (
            <div className="modal-content">{ args.ff }</div>
          ) }
        </Modal>
        <OpenCloseModalWrapped />
      </ModalProvider>,
    );

    expect(wrapper.find('.modal-content')).toHaveLength(0);

    wrapper.find('.open-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').text()).toBe('00');

    wrapper.find('.close-button').simulate('click');
    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });

});
