import React from 'react';

import { createTheme } from 'utils';
import { Input } from '../Input';
import { FormField } from '../Form/FormField';

type InputFieldProps = {|
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** direction of the input with label */
  direction?: 'row' | 'column',
  /** set input width to the equal height */
  square?: boolean,
  /** max symbols in the input value*/
  maxLength?: number,
  /** when true then don't show error label */
  hideErrorLabel?: boolean,
  /** when true then don't show error indicator */
  hideErrorIndicator?: boolean,
  /** align of the input value */
  align?: 'center' | 'left' | 'right',
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
|};

const name = 'inputField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const InputField = ({
  align,
  direction,
  hideErrorIndicator,
  hideErrorLabel,
  input = {},
  label,
  maxLength,
  meta = {},
  square,
  stretch,
  ...rest
  }: InputFieldProps) => {
  const { error, touched } = meta;
  const { name, value, onChange, onFocus, onBlur } = input;
  const hasError = !!error && !!touched;

  return (
    <FormField label={ label } stretch={ stretch } direction={ direction } hideErrorLabel={ hideErrorLabel } input={ input } meta={ meta }>
      <Input
        { ...rest }
        align={ align }
        hasError={ hasError }
        hideErrorIndicator={ hideErrorIndicator }
        maxLength={ maxLength }
        name={ name }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
        square={ square }
        value={ value }
      />
    </FormField>
  );
};

InputField.defaultProps = {
  stretch: true,
  type: 'text',
  input: {},
  meta: {},
};

export { InputField, theme };
