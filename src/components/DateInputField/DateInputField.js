import React from 'react';

import { DateInput } from '../DateInput';
import { FormField } from '../Form/FormField';

type DateInputFieldProps = {|
  /** field label */
  label?: string,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

function DateInputField({
  label,
  input,
  meta,
  ...rest
  }: DateInputFieldProps) {
  const { name, value, onChange } = input;

  return (
    <FormField label={ label } input={ input } meta={ meta }>
      <DateInput
        { ...rest }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </FormField>
  );
}

export { DateInputField };
