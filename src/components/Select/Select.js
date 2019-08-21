// @flow

import React from 'react';
import ReactSelect, { components } from 'react-select';
import { withTheme } from 'emotion-theming';
import { type SerializedStyles } from '@emotion/utils';

import { SelectTag } from './Select.theme';
import { type Theme, COLORS, Z_INDEX } from '../../theme';

type SelectProps = {|
  options: Array<{ label: mixed, value: string, options?: Array<Object> }>,
  onChange: (value: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  inputValue?: string,
  onInputChange ?: (value: string, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: any | any[],
  loading?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  clearable?: boolean,
  hasError?: boolean,
  withPortal?: boolean,
  menuIsOpen?: boolean,
  zIndex?: string | number,
  valueComponent?: React$Node,
  components?: Object,
  className?: string,
  formatOptionLabel?: Function,
  /** when stretch is true, width is 100% */
  stretch?: boolean,
  css?: SerializedStyles,
|};

type SelectPropsFromHOCs = {|
  theme: Theme
|}

const customStyles = ({ hasError, zIndex = Z_INDEX.DROPDOWN, COLORS }) => ({
  control: (style, { isFocused, isDisabled }) => ({
    ...style,
    minHeight: '36px',
    backgroundColor: isDisabled ? COLORS.LIGHT_GRAY5 : COLORS.WHITE,
    borderColor: hasError ? COLORS.DANGER : (isFocused ? COLORS.PRIMARY : COLORS.PRIMARY_BORDER_COLOR),
    boxShadow: null,
    '&:hover': {
      borderColor: isFocused ? COLORS.PRIMARY : COLORS.PRIMARY_BORDER_COLOR,
    },
  }),
  menuPortal: (style) => ({
    ...style,
    zIndex,
  }),
  placeholder: (style) => ({
    ...style,
    color: COLORS.PLACEHOLDER_COLOR,
    whiteSpace: 'nowrap',
  }),
  indicatorSeparator: (style) => ({
    ...style,
    display: 'none',
  }),
  multiValue: (style) => ({
    ...style,
    borderRadius: '12px',
    padding: '0 8px',
    color: '#878c93',
    border: '1px solid #d0d7dd',
    backgroundColor: '#fff',
    height: 26,
  }),
  multiValueLabel: (style) => ({
    ...style,
    color: 'inherit',
  }),
  multiValueRemove: (style) => ({
    ...style,
    color: 'inherit',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
    },
  }),
  dropdownIndicator: (style) => ({
    ...style,
    padding: '0 8px',
  }),
  clearIndicator: (style) => ({
    ...style,
    padding: '0 8px',
  }),
  option: (style) => ({
    ...style,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
});

const findOptionByValue = (value, options) => {
  if (Array.isArray(value)) {
    return value.map((valueItem) => findOptionByValue(valueItem, options));
  }

  const foundOption = options.reduce((result, option) => {
    if (result === null) {
      if (option.value === value) {
        return option;
      } else if (Array.isArray(option.options)) {
        return findOptionByValue(value, option.options);
      }
    }

    return result;
  }, null);

  return foundOption;
};

class Select extends React.Component<SelectProps & SelectPropsFromHOCs> {
  static components = components;
  static defaultProps = {
    withPortal: true,
    stretch: true,
  };

  onChange = (option: Object) => {
    let value = null;

    if (Array.isArray(option)) {
      value = option.map(({ value }) => value);
    } else if (option) {
      ({ value } = option);
    }

    this.props.onChange(value);
  };

  render() {
    const {
      value,
      loading,
      clearable,
      disabled,
      multiple,
      options,
      placeholder,
      valueComponent,
      components,
      onChange,
      withPortal,
      theme,
      formatOptionLabel,
      inputValue,
      onInputChange,
      menuIsOpen,
      ...rest
    } = this.props;

    const selectValue = findOptionByValue(value, options);

    return (
      <SelectTag { ...rest } aria-busy={ String(loading || false) }>
        <ReactSelect
          isClearable={ clearable }
          isDisabled={ disabled }
          isLoading={ loading }
          isMulti={ multiple }
          menuPlacement="auto"
          menuPortalTarget={ withPortal ? document.body : false }
          onChange={ this.onChange }
          options={ options }
          placeholder={ placeholder }
          valueComponent={ valueComponent }
          styles={ customStyles({ ...rest, COLORS: theme.COLORS || COLORS }) }
          value={ selectValue }
          components={ components }
          formatOptionLabel={ formatOptionLabel }
          inputValue={ inputValue }
          onInputChange={ onInputChange }
          menuIsOpen={ menuIsOpen }
        />
      </SelectTag>
    );
  }
}

Select = withTheme(Select);

export { Select };
