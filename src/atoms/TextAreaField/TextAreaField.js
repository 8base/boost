import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { TextArea } from '../TextArea';
import { Label } from '../Label';

type TextAreaFieldProps = {|
  cols?: number,
  name: string,
  onChange: (event?: SyntheticAreaEvent) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
|};

const name = 'textAreaField';

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

function TextAreaField({
  label,
  name,
  onChange,
  placeholder,
  value,
  cols,
  rows,
  ...rest
  }: TextAreaFieldProps) {
  return (
    <StyledTag { ...rest } tagName="div">
      <Label text={ label } kind="secondary" />
      <TextArea
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        value={ value }
        cols={ cols }
        rows={ rows }
      />
    </StyledTag>
  );
}

export { TextAreaField, theme };
