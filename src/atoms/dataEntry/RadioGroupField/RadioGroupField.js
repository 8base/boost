// @flow

import React from 'react';

import type { InputType, MetaType } from '../formTypes';
import * as formUtils from '../../../utils/forms';
import { Radio } from '../Radio';
import { FormField } from '../Form/FormField';

type RadioGroupFieldProps = {
  /** Grop.Item components */
  children: React$Node,
  /** when true then don't show error label */
  hideErrorLabel?: boolean,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
};

const RadioGroupField = ({
  children,
  hideErrorLabel,
  input = {},
  meta = {},
  ...rest
  }: RadioGroupFieldProps) => {
  const { name, value, onChange } = input;

  const hasError = formUtils.hasError(meta);

  return (
    <FormField hideErrorLabel={ hideErrorLabel } input={ input } meta={ meta }>
      <Radio.Group
        { ...rest }
        name={ name }
        hasError={ hasError }
        onChange={ onChange }
        value={ value }
      >
        { children }
      </Radio.Group>
    </FormField>
  );
};

RadioGroupField.defaultProps = {
  input: {},
  meta: {},
};

export { RadioGroupField };
