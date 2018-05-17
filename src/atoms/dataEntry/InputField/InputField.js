import React from 'react';

import { createTheme } from 'utils';
import { Input } from '../Input';
import { FormField } from '../FormField';

type InputFieldProps = {|
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

const name = 'inputField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const InputField = ({
  label,
  stretch,
  input = {},
  meta = {},
  ...rest
  }: InputFieldProps) => {
  const { error, touched } = meta;
  const { name, value, onChange } = input;
  const hasError = !!error && !!touched;

  return (
    <FormField label={ label } stretch={ stretch } input={ input } meta={ meta }>
      <Input
        { ...rest }
        name={ name }
        onChange={ onChange }
        value={ value }
        hasError={ hasError }
      />
    </FormField>
  );
};

InputField.defaultProps = {
  stretch: false,
  type: 'text',
  input: {},
  meta: {},
};

export { InputField, theme };
