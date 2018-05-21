// @flow

import React from 'react';

import type { InputType, MetaType } from '../formTypes';
import { Radio } from '../Radio';
import { FormField } from '../FormField';

type RadioGroupFieldProps = {
  /** Grop.Item components */
  children: React$Node,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
};

const RadioGroupField = ({
  children,
  input = {},
  meta = {},
  ...rest
  }: RadioGroupFieldProps) => {
  const { name, value, onChange } = input;

  return (
    <FormField input={ input } meta={ meta }>
      <Radio.Group
        { ...rest }
        name={ name }
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
