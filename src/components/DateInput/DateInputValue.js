// @flow

import React from 'react';

import { Input } from '../Input';

type DateInputValueProps = {
  onChange: (value: Object) => void,
  onBlur: () => void,
  value: ?string,
  mask: string,
  clearable?: boolean,
  disabled?: boolean,
};

const DateInputValue = ({ value, onChange, ...props }: DateInputValueProps) => (
  <Input onChange={ (val) => onChange({ target: { value: val }}) } value={ value } { ...props } />
);

export { DateInputValue };
