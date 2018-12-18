// @flow

import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '../Input';

type DateInputValueProps = {|
  onChange: (value: Object) => void,
  onBlur: () => void,
  value: ?string,
  mask: string,
|};

const DateInputValue = ({ value, onChange, ...props }: DateInputValueProps) => (
  <Input onChange={ (val) => onChange({ target: { value: val }}) } value={ value } { ...props } />
);

export { DateInputValue };