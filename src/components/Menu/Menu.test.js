// @flow
import React from 'react';
import { Menu } from './';

describe('<Menu />', () => {
  it('should render Menu components', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Menu.Plate>
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item>Proalliance</Menu.Item>
        </Menu.Plate>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(Menu.Item).at(0).text()).toBe('Tramman');
    expect(wrapper.find(Menu.Item).at(1).text()).toBe('Gripman');
    expect(wrapper.find(Menu.Item).at(2).text()).toBe('Proalliance');
  });
});

