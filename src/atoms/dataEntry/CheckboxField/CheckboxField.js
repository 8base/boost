// @flow

import React from 'react';

import type { InputType, MetaType } from '../formTypes';
import * as formUtils from '../../../utils/forms';
import { Checkbox } from '../Checkbox';
import { FormField } from '../Form/FormField';

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
  const { name, value, onChange, onFocus, onBlur } = input;

  const hasError = formUtils.hasError(meta);

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
