// @flow

import React, { Component } from 'react';
import ReactSelect from 'react-select';

import { SelectTag, SelectValue, SelectChevron } from './Select.theme';
import { PALETTE } from '../../../theme';
import { Dropdown } from '../../Dropdown';
import { Scrollable } from '../../Scrollable';
import { Menu } from '../../Menu';
import { Icon } from '../../typography/Icon';

type SelectProps = {|
  options: Array<{ label: mixed, value: string }>,
  onChange: (selectedValue: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: string,
  loading?: boolean,
|};

const customStyles = (props) => ({
  control: (style) => ({...style, minHeight: '4rem', backgroundColor: PALETTE.WHITE, borderColor: props.hasError ? PALETTE.DANGER : PALETTE.LIGHT_GRAY1 }),
  placeholder: (style) => ({...style, color: PALETTE.LIGHT_GRAY1 }),
});

const Select = ({ loading, ...props}) => <SelectTag { ...props } isLoading={ loading } tagName={ ReactSelect } styles={ customStyles(props) } isClearable />;

export { Select };
