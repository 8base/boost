// @flow
import React from 'react';
import ReactSelect from 'react-select';
import { SelectTag } from './Select.theme';

import { Select } from './';

describe('<Select />', () => {
  it('should pass props to ReactSelect', () => {
    const options = [{ label: 'ovenlike', value: 'ovenlike' }];
    const placeholder = 'Select an option';
    const clearable = true;
    const multiple = true;
    const hasError = false;
    const loading = false;
    const disabled = true;
    const stretch = true;
    const components = {};

    const wrapper = mount(
      <BoostProvider>
        <Select
          clearable={ clearable }
          multiple={ multiple }
          hasError={ hasError }
          onChange={ jest.fn() }
          placeholder={ placeholder }
          options={ options }
          value={ options[0].value }
          loading={ loading }
          disabled={ disabled }
          components={ components }
          stretch={ stretch }
        />
      </BoostProvider>,
    );

    const { children, ...passedStyledProps } = wrapper.find(SelectTag).props();
    const { styles, menuPortalTarget, onChange, valueComponent, ...passedSelectProps } = wrapper.find(ReactSelect).props();

    expect(passedSelectProps).toEqual({
      isClearable: clearable,
      isMulti: multiple,
      isDisabled: disabled,
      placeholder,
      options,
      value: options[0],
      defaultInputValue: '',
      defaultMenuIsOpen: false,
      defaultValue: null,
      menuPlacement: 'auto',
      isLoading: loading,
      components,
    });

    expect(passedStyledProps).toEqual({
      hasError,
      'aria-busy': String(loading),
      stretch,
    });
  });
});
