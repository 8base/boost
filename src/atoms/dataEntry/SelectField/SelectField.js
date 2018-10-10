import React from 'react';

import { createTheme } from '../../../utils';
import * as formUtils from '../../../utils/forms';
import { Select } from '../Select';
import { FormField } from '../Form/FormField';

type SelectFieldProps = {|
  /** array of select options */
  options: Array<Object>,
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

const name = 'selectField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

function SelectField({
  options,
  placeholder,
  label,
  stretch,
  input = {},
  meta = {},
  ...rest
  }: SelectFieldProps) {
  const { name, value, onChange } = input;

  const hasError = formUtils.hasError(meta);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <FormField label={ label } stretch={ stretch } input={ input } meta={ meta }>
      <Select
        { ...rest }
        name={ name }
        onChange={ (selectedOption) => onChange(selectedOption ? selectedOption.value : null) }
        placeholder={ placeholder }
        value={ selectedOption }
        options={ options }
        stretch={ stretch }
        hasError={ hasError }
      />
    </FormField>
  );
}

export { SelectField, theme };
