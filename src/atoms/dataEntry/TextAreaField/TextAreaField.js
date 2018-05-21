import React from 'react';

import { createTheme } from 'utils';
import { TextArea } from '../TextArea';
import { FormField } from '../FormField';

type TextAreaFieldProps = {|
  /** number of textarea columns */
  cols?: number,
  /** number of textarea rows */
  rows?: number,
  /** placeholder */
  placeholder?: string,
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

const name = 'textAreaField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

function TextAreaField({
  cols,
  input = {},
  label,
  meta = {},
  placeholder,
  rows,
  stretch,
  ...rest
  }: TextAreaFieldProps) {
  const { name, value, onChange } = input;

  return (
    <FormField label={ label } stretch={ stretch } input={ input } meta={ meta }>
      <TextArea
        { ...rest }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        value={ value }
        cols={ cols }
        rows={ rows }
      />
    </FormField>
  );
}

export { TextAreaField, theme };
