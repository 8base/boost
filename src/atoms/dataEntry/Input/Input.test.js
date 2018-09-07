// @flow
import React from 'react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should call onCahnge with text value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } />);

    wrapper.find('input').simulate('change', { target: { value: 'val' }});
    expect(onChange.mock.calls[0][0]).toBe('val');
  });

  it('should call onChange with number value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } type="number" />);

    wrapper.find('input').simulate('change', { target: { value: 'val' }});
    expect(onChange.mock.calls[0][0]).toBe(null);

    wrapper.find('input').simulate('change', { target: { value: '42' }});
    expect(onChange.mock.calls[1][0]).toBe(42);
    expect(typeof onChange.mock.calls[1][0]).toBe('number');
  });

  it('should not call onCahnge with max value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } maxLength={ 2 } />);

    wrapper.find('input').simulate('change', { target: { value: '123' }});
    expect(onChange).not.toHaveBeenCalled();

    wrapper.find('input').simulate('change', { target: { value: '12' }});
    expect(onChange.mock.calls[0][0]).toBe('12');
  });
});
