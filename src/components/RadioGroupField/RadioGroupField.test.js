// @flow
import React from 'react';
import { RadioGroupField } from './';

describe('<RadioGroupField />', () => {
  it('should pass props to the children', () => {
    const onChange = jest.fn();
    const options = [
      { label: 'Radio 1', value: 1 },
      { label: 'Radio 2', value: 2 },
      { label: 'Radio 3', value: 3 },
    ];
    const input = { onChange, value: 2 };

    const wrapper = shallow(
      <RadioGroupField
        meta={{}}
        input={ input }
        options={ options }
      />,
    );

    const { children, ...formFieldPassedProps } = wrapper.find('FormField').props();

    expect(formFieldPassedProps).toEqual({
      direction: 'column',
      hideErrorLabel: false,
      input,
      meta: {},
      stretch: true,
    });

    expect(wrapper.find('RadioGroup').props()).toEqual({
      direction: 'column',
      gap: 'md',
      hasError: false,
      onChange,
      options,
      value: 2,
    });
  });
});
