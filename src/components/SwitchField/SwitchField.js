// @flow

import React from 'react';

import type { InputType, MetaType } from '../../types';
import * as formUtils from '../../utils/forms';
import { Switch } from '../Switch';
import { FormField } from '../Form/FormField';

type SwitchFieldProps = {
  label?: string,
  input: InputType,
  meta?: MetaType,
};

const SwitchField = ({ label, input, meta, ...rest }: SwitchFieldProps) => {
  const {
    name,
    value,
    onChange,
    onFocus,
    onBlur,
  } = input;
  const hasError = formUtils.hasError(meta);

  return (
    <FormField { ...rest } input={ input } meta={ meta }>
      <Switch
        name={ name }
        label={ label }
        value={ Boolean(value) }
        onChange={ onChange }
        onBlur={ onBlur }
        onFocus={ onFocus }
        hasError={ hasError }
      />
    </FormField>
  );
};

export { SwitchField };

