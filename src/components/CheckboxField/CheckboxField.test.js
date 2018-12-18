// @flow
import React from 'react';
import { CheckboxField } from './CheckboxField';

describe('<Checkbox />', () => {
  it('should call onChange callback with false', () => {
    const onChange = jest.fn();
    const wrapper = mount(<CheckboxField meta={{}} input={{ onChange, checked: true }} />);

    wrapper.find('input').simulate('change', { target: { checked: false }});
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should not call onChange callback with disabled prop', () => {
    const onChange = jest.fn();
    const wrapper = mount(<CheckboxField meta={{}} input={{ onChange, checked: true }} disabled />);

    wrapper.find('input').simulate('change', { target: {}});
    expect(onChange).not.toHaveBeenCalled();
  });
});

