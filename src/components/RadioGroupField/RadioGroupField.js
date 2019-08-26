// @flow

import React from 'react';

import * as formUtils from '../../utils/forms';
import { Radio } from '../Radio';
import { FormField } from '../Form/FormField';
import type { InputType, MetaType, PropSizes } from '../../types';

type RadioGroupFieldProps = {
  /** Grop.Item components */
  children?: React$Node,
  /** when true then don't show error label */
  hideErrorLabel?: boolean,
  /** form input object */
  input: InputType,
  /** form meta object */
  meta?: MetaType,
  /** offset between radio items */
  gap?: PropSizes,
  /** direction of the radio items */
  direction?: 'row' | 'column',
  /** options to define radio items */
  options?: Array<({ value: any, label: string })>,
  /** disabled */
  disabled?: boolean,
};

const RadioGroupField = ({
  children,
  direction,
  gap,
  hideErrorLabel,
  input,
  meta,
  options,
  disabled,
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
        disabled={ disabled }
      >
        { children }
      </Radio.Group>
    </FormField>
  );
};

export { RadioGroupField };
