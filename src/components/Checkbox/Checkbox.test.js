// @flow
import React from 'react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should call onChange callback with false', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } checked />);

    wrapper.find('input').simulate('change', { target: { checked: false }});
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should call onChange callback with true', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } />);

    wrapper.find('input').simulate('change', { target: { checked: true }});
    expect(onChange.mock.calls[0][0]).toBe(true);
  });

  it('should not call onChange callback with disabled prop', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } disabled />);

    wrapper.find('input').simulate('change', { target: {}});
    expect(onChange).not.toHaveBeenCalled();
  });
});

