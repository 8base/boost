import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Select } from '../Select';
import { Label } from '../Label';

type SelectFieldProps = {|
  label: string,
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  options: Array<Object>,
  placeholder?: string,
  value?: string,
  stretch?: boolean,
|};

const name = 'selectField';

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

function SelectField({
  label,
  name,
  onChange,
  placeholder,
  value,
  options,
  stretch,
  ...rest
  }: SelectFieldProps) {
  return (
    <StyledTag { ...rest } tagName="div">
      <Label text={ label } kind="secondary" />
      <Select
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        value={ value }
        options={ options }
        stretch={ stretch }
      />
    </StyledTag>
  );
}

export { SelectField, theme };
