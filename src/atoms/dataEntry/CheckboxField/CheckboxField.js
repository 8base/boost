// @flow

import React from 'react';

import type { InputType, MetaType } from '../formTypes';
import { Checkbox } from '../Checkbox';
import { FormField } from '../FormField';

type CheckboxFieldProps = {|
  /** field label */
  label?: string,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

const CheckboxField = ({
  label,
  stretch,
  input = {},
  meta = {},
  ...rest
  }: CheckboxFieldProps) => {
  const { error, touched } = meta;
  const { name, value, onChange, onBlur, onFocus } = input;
  const hasError = !!error && !!touched;

  return (
    <FormField input={ input } meta={ meta }>
      <Checkbox
        { ...rest }
        label={ label }
        name={ name }
        onChange={ onChange }
        onBlur={ onBlur }
        onFocus={ onFocus }
        checked={ value }
        hasError={ hasError }
      />
    </FormField>
  );
};

CheckboxField.defaultProps = {
  input: {},
  meta: {},
};

export { CheckboxField };
