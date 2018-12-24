// @flow
import React from 'react';
import { Switch } from './Switch';
import { SwitchInputTag, SwitchApperanceTag } from './Switch.theme';

describe('<Switch />', () => {
  it('should call onChange callback', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Switch onChange={ onChange } value={ false } />);

    wrapper.find('input').simulate('change', { target: { checked: true }});
    expect(onChange.mock.calls[0][0]).toBe(true);
  });

  it('should pass value props', () => {
    const wrapper = shallow(<Switch value={ false } />);

    expect(wrapper.find(SwitchInputTag).props().checked).toBeFalsy();
    expect(wrapper.find(SwitchApperanceTag).props().value).toBeFalsy();

    wrapper.setProps({ value: true });
    expect(wrapper.find(SwitchInputTag).props().checked).toBeTruthy();
    expect(wrapper.find(SwitchApperanceTag).props().value).toBeTruthy();
  });

  it('should render label', () => {
    const wrapper = mount(<Switch value={ false } />);

    expect(wrapper.text()).toBe('');

    wrapper.setProps({ label: 'label' });
    expect(wrapper.text()).toBe('label');
  });
});

