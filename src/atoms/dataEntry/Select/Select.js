// @flow

import React from 'react';
import ReactSelect from 'react-select';

import { SelectTag } from './Select.theme';
import { PALETTE, Z_INDEX } from '../../../theme';

type SelectProps = {|
  options: Array<{ label: mixed, value: string }>,
  onChange: (selectedValue: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: Object,
  loading?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  hasError?: boolean,
  zIndex?: string | number,
|};

const customStyles = ({ hasError, zIndex = Z_INDEX.DROPDOWN }) => ({
  control: (style, { isFocused }) => ({
    ...style,
    minHeight: '4rem',
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
    backgroundColor: PALETTE.WHITE,
  }),
});

const Select = ({ value, loading, disabled, multiple, options, onChange, placeholder, ...props }: SelectProps) => (
  <SelectTag { ...props }>
    <ReactSelect
      isClearable={ false }
      isDisabled={ disabled }
      isLoading={ loading }
      isMulti={ multiple }
      menuPlacement="auto"
      menuPortalTarget={ document.body }
      onChange={ onChange }
      options={ options }
      placeholder={ placeholder }
      styles={ customStyles(props) }
      value={ value }
    />
  </SelectTag>
);

export { Select };

