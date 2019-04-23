// @flow

import React from 'react';
import ReactSelect, { components } from 'react-select';

import { SelectTag } from './Select.theme';
import { PALETTE, Z_INDEX } from '../../theme';

type SelectProps = {|
  options: Array<{ label: mixed, value: string }>,
  onChange: (value: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: any | any[],
  loading?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  clearable?: boolean,
  hasError?: boolean,
  withPortal?: boolean,
  zIndex?: string | number,
  valueComponent?: React$Node,
  components?: Object,
  className?: string,
|};

const customStyles = ({ hasError, zIndex = Z_INDEX.DROPDOWN }) => ({
  control: (style, { isFocused }) => ({
    ...style,
    minHeight: '36px',
    backgroundColor: PALETTE.WHITE,
    borderColor: hasError ? PALETTE.DANGER : (isFocused ? PALETTE.PRIMARY : PALETTE.LIGHT_GRAY1),
    boxShadow: null,
    '&:hover': {
      borderColor: isFocused ? PALETTE.PRIMARY : PALETTE.LIGHT_GRAY1,
    },
  }),
  menuPortal: (style) => ({
    ...style,
    zIndex,
  }),
  placeholder: (style) => ({
    ...style,
    color: PALETTE.LIGHT_GRAY1,
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
});

class Select extends React.Component<SelectProps> {
  static defaultProps = {
    withPortal: true,
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
      ...rest
    } = this.props;

    const selectValue = (
      Array.isArray(value)
        ? options.filter((option) => value.indexOf(option.value) !== -1)
        : options.find((option) => option.value === value)
    ) || null;

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
          styles={ customStyles(rest) }
          value={ selectValue }
          components={ components }
        />
      </SelectTag>
    );
  }
}

// $FlowFixMe
Select.components = components;

export { Select };

