// @flow

import React from 'react';
import { Select } from './Select';
import { SelectValue } from './Select.theme';
import { Dropdown } from '../../Dropdown';
import { Menu } from '../../Menu';


const OPTIONS = [{
  content: 'ovenlike-content',
  value: 'ovenlike',
}, {
  content: 'serjeant-content',
  value: 'serjeant',
}, {
  content: 'wiseheartedly-content',
  value: 'wiseheartedly',
}];

describe('<Select />', () => {
  it('should open and close dropdown', () => {
    const wrapper = shallow(<Select options={ OPTIONS } onChange={ jest.fn() } />);
    const dropdown = wrapper.find(Dropdown.Plate);

    expect(wrapper.state().isOpen).toBeFalsy();

    dropdown.props().onOpenDropdown();
    expect(wrapper.state().isOpen).toBeTruthy();

    dropdown.props().onCloseDropdown();
    expect(wrapper.state().isOpen).toBeFalsy();
  });

  it('should select option', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Select options={ OPTIONS } onChange={ onChange } />);

    const dropdown = wrapper.find(Dropdown.Plate);
    dropdown.props().onOpenDropdown();

    const menuItem = wrapper.find(Menu.Item).findWhere(el => el.props().children === 'ovenlike-content');
    menuItem.simulate('click');

    expect(wrapper.state().selectedValue).toBe('ovenlike');
    expect(wrapper.find(SelectValue).props().children[0]).toBe('ovenlike-content');
  });
});
