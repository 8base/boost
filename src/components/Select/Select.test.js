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
    const loading = false;

    const wrapper = mount(
      <Select
        clearable={ clearable }
        multiple={ multiple }
        hasError={ hasError }
        onChange={ onChange }
        placeholder={ placeholder }
        options={ options }
        value={ options[0] }
        loading={ loading }
      />,
    );

    const { children, ...passedStyledProps } = wrapper.find(SelectTag).props();
    const { styles, menuPortalTarget, ...passedSelectProps } = wrapper.find(ReactSelect).props();

    expect(passedSelectProps).toEqual({
      isClearable: clearable,
      isMulti: multiple,
      placeholder,
      onChange,
      options,
      value: options[0],
      defaultInputValue: '',
      defaultMenuIsOpen: false,
      defaultValue: null,
      menuPlacement: 'auto',
      isLoading: loading,
    });

    expect(passedStyledProps).toEqual({
      hasError,
      'aria-busy': String(loading),
    });
  });
});
