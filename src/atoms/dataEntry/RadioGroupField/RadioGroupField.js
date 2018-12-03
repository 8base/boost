// @flow

import React from 'react';

import * as formUtils from '../../../utils/forms';
import { Radio } from '../Radio';
import { FormField } from '../Form/FormField';
import type { PropSizes } from '../../../types';
import type { InputType, MetaType } from '../formTypes';

type RadioGroupFieldProps = {
  /** Grop.Item components */
  children: React$Node,
  /** when true then don't show error label */
  hideErrorLabel?: boolean,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
  /** offset between radio items */
  gap?: PropSizes,
  /** direction of the radio items */
  direction?: 'row' | 'column',
  /** options to define radio items */
  options?: ({ value: any, label: string }) => void,
};

const RadioGroupField = ({
  children,
  direction,
  gap,
  hideErrorLabel,
  input = {},
  meta = {},
  options,
  ...rest
  }: RadioGroupFieldProps) => {
  const { name, value, onChange } = input;

  const hasError = formUtils.hasError(meta);

  return (
    <FormField { ...rest } hideErrorLabel={ hideErrorLabel } input={ input } meta={ meta }>
      <Radio.Group
        direction={ direction }
        gap={ gap }
        hasError={ hasError }
        name={ name }
        onChange={ onChange }
        options={ options }
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
