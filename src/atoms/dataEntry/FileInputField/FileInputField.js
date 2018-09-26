import React from 'react';

import { createTheme } from '../../../utils';
import { FileInput } from '../FileInput';
import { FormField } from '../Form/FormField';

type FileInputFieldProps = {|
  /** field label */
  label?: string,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

const name = 'FileInputField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

function FileInputField({
  label,
  input = {},
  meta = {},
  ...rest
  }: FileInputFieldProps) {
  const { name, value, onChange } = input;

  return (
    <FormField label={ label } input={ input } meta={ meta }>
      <FileInput
        { ...rest }
        name={ name }
        value={ value }
        onChange={ onChange}
      />
    </FormField>
  );
}

export { FileInputField, theme };
