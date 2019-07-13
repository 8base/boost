// @flow
import React from 'react';
import { FormField } from '../Form/FormField';
import { Select } from '../Select';

import { SelectField } from './';

describe('<SelectField />', () => {
  const options = [
    { label: 'ovenlike', value: 'ovenlike' },
    { label: 'serjeant', value: 'serjeant' },
  ];

  it('should pass props to Select and to Form', () => {
    const label = 'Select Label';
    const placeholder = 'Select an option';
    const clearable = true;
    const multiple = true;
    const input = { name: 'input', onChange: jest.fn(), value: null };
    const meta = { error: 'asdasd', touched: true };

    const wrapper = mount(
      <BoostProvider>
        <SelectField
          label={ label }
          input={ input }
          meta={ meta }
          stretch
          clearable={ clearable }
          multiple={ multiple }
          placeholder={ placeholder }
          options={ options }
        />
      </BoostProvider>,
    );


    const { onChange, ...passedSelectProps } = wrapper.find(Select).props();
    const { children, ...passedFormFieldProps } = wrapper.find(FormField).props();

    expect(passedSelectProps).toEqual({
      clearable,
      hasError: true,
      input,
      label,
      meta,
      multiple,
      name: 'input',
      options,
      placeholder,
      stretch: true,
      value: null,
    });

    expect(passedFormFieldProps).toEqual({
      direction: 'column',
      hideErrorLabel: false,
      input,
      label,
      meta,
      stretch: true,
    });
  });


  it('should pass correct value', () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <SelectField
        input={{ name: 'input', onChange, value: 'serjeant' }}
        meta={{}}
        options={ options }
      />,
    );

    expect(wrapper.find(Select).props().value).toEqual('serjeant');

    wrapper.setProps({ input: { value: ['ovenlike', 'serjeant'] }});
    expect(wrapper.find(Select).props().value).toEqual([
      'ovenlike',
      'serjeant',
    ]);
  });


  it('should pass call onChange callback', () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <SelectField
        input={{ name: 'input', onChange }}
        meta={{}}
        options={ options }
      />,
    );

    wrapper.find(Select).props().onChange(options[0].value);
    expect(onChange.mock.calls[0][0]).toBe(options[0].value);

    wrapper.find(Select).props().onChange(['ovenlike', 'serjeant']);
    expect(onChange.mock.calls[1][0]).toEqual(['ovenlike', 'serjeant']);

    wrapper.find(Select).props().onChange(null);
    expect(onChange.mock.calls[2][0]).toBeNull();
  });
});
