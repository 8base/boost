// @flow
import React from 'react';
import { Menu } from './';

describe('<Menu />', () => {
  it('should shallow Menu', () => {
    const wrapper = shallow(
      <Menu>
        <Menu.Item>Tramman</Menu.Item>
      </Menu>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should shallow Menu item', () => {
    const wrapper = shallow(
      <Menu.Item>Tramman</Menu.Item>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should render Menu components content', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Menu>
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item>Proalliance</Menu.Item>
        </Menu>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(Menu.Item).at(0).text()).toBe('Tramman');
    expect(wrapper.find(Menu.Item).at(1).text()).toBe('Gripman');
    expect(wrapper.find(Menu.Item).at(2).text()).toBe('Proalliance');
  });
});

