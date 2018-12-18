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
    const onChange = jest.fn();
    const placeholder = 'Select an option';
    const clearable = true;
    const multiple = true;

    const wrapper = shallow(
      <SelectField
        label={ label }
        input={{ name: 'input', onChange }}
        meta={{ error: 'asdasd', touched: true }}
        stretch
        clearable={ clearable }
        multiple={ multiple }
        onChange={ onChange }
        placeholder={ placeholder }
        options={ options }
      />,
    );

    const select = wrapper.find(Select);
    const formField = wrapper.find(FormField);

    expect(select.props().clearable).toBe(clearable);
    expect(select.props().multiple).toBe(multiple);
    expect(select.props().placeholder).toBe(placeholder);
    expect(select.props().options).toBe(options);
    expect(select.props().hasError).toBe(true);

    expect(formField.props().stretch).toBe(true);
    expect(formField.props().label).toBe(label);
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

    expect(wrapper.find(Select).props().value).toEqual({ label: 'serjeant', value: 'serjeant' });

    wrapper.setProps({ input: { value: ['ovenlike', 'serjeant'] }});
    expect(wrapper.find(Select).props().value).toEqual([
      { label: 'ovenlike', value: 'ovenlike' },
      { label: 'serjeant', value: 'serjeant' },
    ]);
  });

  it('should pass call onChange callback', () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <SelectField
        input={{ name: 'input', onChange }}
        meta={{ }}
        options={ options }
      />,
    );

    wrapper.find(Select).props().onChange(options[0]);
    expect(onChange.mock.calls[0][0]).toBe(options[0].label);

    wrapper.find(Select).props().onChange(options);
    expect(onChange.mock.calls[1][0]).toEqual(['ovenlike', 'serjeant']);

    wrapper.find(Select).props().onChange();
    expect(onChange.mock.calls[2][0]).toBeNull();
  });
});
