// @flow
import React from 'react';
import ReactSelect from 'react-select';
import { SelectTag } from './Select.theme';

import { Select } from './';

describe('<Select />', () => {
  it('should pass props to ReactSelect', () => {
    const onChange = jest.fn();
    const options = [{ label: 'ovenlike', value: 'ovenlike' }];
    const placeholder = 'Select an option';
    const clearable = true;
    const multiple = true;
    const hasError = false;

    const wrapper = mount(
      <Select
        clearable={ clearable }
        multiple={ multiple }
        hasError={ hasError }
        onChange={ onChange }
        placeholder={ placeholder }
        options={ options }
      />,
    );

    const reactSelect = wrapper.find(ReactSelect);
    const styledTag = wrapper.find(SelectTag);

    expect(reactSelect.props().isClearable).toBe(clearable);
    expect(reactSelect.props().isMulti).toBe(multiple);
    expect(reactSelect.props().placeholder).toBe(placeholder);
    expect(reactSelect.props().onChange).toBe(onChange);
    expect(reactSelect.props().options).toBe(options);
    expect(styledTag.props().hasError).toBe(hasError);

    wrapper.setProps({ value: options[0] });
    expect(wrapper.find(ReactSelect).props().value).toBe(options[0]);
  });


});
