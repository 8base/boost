// @flow

import * as React from 'react';
import { Modal } from './Modal';
import { OverlayTag } from './Modal.theme';

const map = {};

describe('<Modal />', () => {
  beforeAll(() => {
    // $FlowIgnore
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    // $FlowIgnore
    document.removeEventListener = jest.fn((event) => {
      map[event] = undefined;
    });
  });


  it('should render modal content when modal is open', () => {
    const wrapper = shallow(
      <Modal isOpen>
        <div className="modal-content">content</div>
      </Modal>,
    );

    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.find('.modal-content').children().text()).toBe('content');
  });


  it('should render modal content when modal is open with function as a children', () => {
    const wrapper = mount(
      <Modal isOpen args={{ content: 'content' }}>
        { ({ args }) => (
          <div className="modal-content">{ args.content }</div>
        ) }
      </Modal>,
    );

    expect(wrapper.find('.modal-content')).toHaveLength(1);
    expect(wrapper.text()).toBe('content');
  });


  it('should not render modal content when modal is close', () => {
    const wrapper = mount(
      <Modal isOpen={ false }>
        <div className="modal-content">content</div>
      </Modal>,
    );

    expect(wrapper.find('.modal-content')).toHaveLength(0);
  });


  it('should not call onClose callback on overlay click', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Modal isOpen onClose={ onClose }>
        <div />
      </Modal>,
    );

    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).toHaveBeenCalled();
  });


  it('should call onClose callback on escape with shouldCloseOnOverlayClick=false', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Modal isOpen onClose={ onClose } shouldCloseOnOverlayClick={ false }>
        <div />
      </Modal>,
    );

    wrapper.find(OverlayTag).simulate('mouseDown');
    expect(onClose).not.toHaveBeenCalled();
  });


  it('should call onClose callback on escape key', () => {
    const onClose = jest.fn();

    const wrapper = mount(
      <Modal isOpen onClose={ onClose }>
        <div />
      </Modal>,
    );

    map.keydown({ key: 'Escape' });
    expect(onClose).toHaveBeenCalled();

    wrapper.unmount();
    expect(map.keydown).toBeUndefined();
  });


  it('should not call onClose callback on escape key with shouldCloseOnEscPress=false', () => {
    const onClose = jest.fn();
    const map = {};
    // $FlowIgnore
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    mount(
      <Modal isOpen onClose={ onClose } shouldCloseOnEscPress={ false }>
        <div />
      </Modal>,
    );

    map.keydown({ key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });


});
