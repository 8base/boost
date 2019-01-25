// @flow

import * as React from 'react';
import { Dialog } from './Dialog';
import { HeaderCloseTag } from './Dialog.theme';
import { Modal } from '../Modal';
import { OverlayTag } from '../Modal/Modal.theme';

describe('<Dialog />', () => {
  it('should render dialog content', () => {
    const wrapper = mount(
      <Dialog size="sm" isOpen>
        <Dialog.Header title="header-text" />
        <Dialog.Body>
          body-text
        </Dialog.Body>
        <Dialog.Footer>
          footer-text
        </Dialog.Footer>
      </Dialog>,
    );

    expect(wrapper.find(Dialog.Header).text()).toBe('header-text');
    expect(wrapper.find(Dialog.Body).text()).toBe('body-text');
    expect(wrapper.find(Dialog.Footer).text()).toBe('footer-text');
  });

  it('should call onClose callback', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Dialog size="sm" isOpen>
        <Dialog.Header title="header-text" onClose={ onClose } />
      </Dialog>,
    );

    wrapper.find(HeaderCloseTag).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });


  it('should pass props to the Modal component', () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    const shouldCloseOnOverlayClick = false;
    const shouldCloseOnEscPress = false;
    const isOpen = true;
    const id = 'ID';
    const args = { someArg: 42 };

    const modalProps = {
      onClose,
      onOpen,
      shouldCloseOnOverlayClick,
      shouldCloseOnEscPress,
      isOpen,
      id,
      args,
    };

    const wrapper = shallow(
      <Dialog { ...modalProps } />,
    );

    const { children, ...passedProps } = wrapper.find(Modal).props();
    expect(passedProps).toEqual(modalProps);
  });


  it('should call onClose callback on overlay click', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Dialog size="sm" isOpen onClose={ onClose }>
        <Dialog.Header title="title" />
      </Dialog>,
    );

    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });


  it('should not call onClose callback on overlay click', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Dialog size="sm" isOpen onClose={ onClose }>
        <Dialog.Header title="title" />
      </Dialog>,
    );

    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });


  it('should call onClose callback on escape with shouldCloseOnOverlayClick=false', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Dialog size="sm" isOpen onClose={ onClose } shouldCloseOnOverlayClick={ false }>
        <Dialog.Header title="title" />
      </Dialog>,
    );

    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).not.toHaveBeenCalled();
  });
});

