// @flow
import React from 'react';
import { InputField } from './InputField';

describe('<InputField />', () => {
  it('should call onCahnge with text value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<InputField input={{ onChange }} />);

    wrapper.find('input').simulate('change', { target: { value: 'val' }});
    expect(onChange.mock.calls[0][0]).toBe('val');
  });
});
