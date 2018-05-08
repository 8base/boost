import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { TextInput } from '../TextInput';
import { Label } from '../Label';

type TextInputFieldProps = {|
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  placeholder?: string,
  value?: string,
|};

const name = 'textInputField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  display: 'inline-flex',
  flexDirection: 'column',
});

function TextInputField({
  label,
  name,
  onChange,
  placeholder,
  value,
  ...rest
  }: TextInputFieldProps) {
  return (
    <StyledTag tagName="div" {...rest}>
      <Label text={label} kind="secondary" />
      <TextInput
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </StyledTag>
  );
};

export { TextInputField, theme };