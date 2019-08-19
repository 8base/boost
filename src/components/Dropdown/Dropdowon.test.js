// @flow

import * as React from 'react';
import { Dropdown } from './';
import { Popper } from 'react-popper';


describe('<Dropdown />', () => {
  it('should render dropdown', () => {
    const wrapper = mount(
      <Dropdown isOpen={ false }>
        <Dropdown.Head>Head</Dropdown.Head>
        <Dropdown.Body>
          <div className="body">Body</div>
        </Dropdown.Body>
      </Dropdown>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should pass props to Popper component', () => {
    const wrapper = mount(
      <Dropdown isOpen>
        <Dropdown.Head><div /></Dropdown.Head>
        <Dropdown.Body positionFixed><div /></Dropdown.Body>
      </Dropdown>,
    );

    expect(wrapper.find(Popper).props().positionFixed).toBeTruthy();
  });


  it('should open and close dropdown by changing the props', () => {
    const wrapper = mount(
      <Dropdown isOpen={ false }>
        <Dropdown.Head>Head</Dropdown.Head>
        <Dropdown.Body>
          <div className="body">Body</div>
        </Dropdown.Body>
      </Dropdown>,
    );

    expect(wrapper.find(Dropdown.Head).text()).toBe('Head');
    expect(wrapper.find('.body')).toHaveLength(0);

    wrapper.setProps({ isOpen: true });
    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find(Dropdown.Body).text()).toBe('Body');

    wrapper.setProps({ isOpen: false });
    expect(wrapper.find('.body')).toHaveLength(0);
  });


  it('should call onClose and onOpen callbacks', () => {
    const onOpenDropdown = jest.fn();
    const onCloseDropdown = jest.fn();

    const wrapper = mount(
      <Dropdown isOpen={ false } onCloseDropdown={ onCloseDropdown } onOpenDropdown={ onOpenDropdown }>
        <Dropdown.Head>Head</Dropdown.Head>
        <Dropdown.Body>
          <div className="body">Body</div>
        </Dropdown.Body>
      </Dropdown>,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    expect(onOpenDropdown).toHaveBeenCalled();

    wrapper.setProps({ isOpen: true });
    wrapper.find(Dropdown.Head).simulate('click');
    expect(onCloseDropdown).toHaveBeenCalled();
  });


  it('should open and close dropdwon by clicking to head', () => {
    const wrapper = mount(
      <Dropdown defaultOpen>
        <Dropdown.Head>Head</Dropdown.Head>
        <Dropdown.Body>
          <div className="body">Body</div>
        </Dropdown.Body>
      </Dropdown>,
    );

    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find('.body').text()).toBe('Body');

    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(0);

    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(1);
    expect(wrapper.find('.body').text()).toBe('Body');
  });


  it('shouldn\'t open and close dropdown when disabled=true', () => {
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Head disabled>Head</Dropdown.Head>
        <Dropdown.Body>
          <div className="body">Body</div>
        </Dropdown.Body>
      </Dropdown>,
    );
    expect(wrapper.find('.body')).toHaveLength(0);

    wrapper.find(Dropdown.Head).simulate('click');
    expect(wrapper.find('.body')).toHaveLength(0);
  });


  it('should render with function in body', () => {
    const onCloseDropdown = jest.fn();

    const wrapper = mount(
      <Dropdown isOpen onCloseDropdown={ onCloseDropdown }>
        <Dropdown.Head>Head</Dropdown.Head>
        <Dropdown.Body stretch>
          { ({ closeDropdown }: *) => (
            <div className="close-dropdown" onClick={ closeDropdown } />
          ) }
        </Dropdown.Body>
      </Dropdown>,
    );


    wrapper.find('.close-dropdown').simulate('click');
    expect(onCloseDropdown).toHaveBeenCalled();
  });
});

