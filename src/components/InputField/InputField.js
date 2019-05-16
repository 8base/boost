import React from 'react';

import * as formUtils from '../../utils/forms';
import { Input } from '../Input';
import { FormField } from '../Form/FormField';

type InputFieldProps = {
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** direction of the input with label */
  direction?: 'row' | 'column',
  /** set custom input width */
  width?: number,
  /** max symbols in the input value*/
  maxLength?: number,
  /** when true then don't show error label */
  hideErrorLabel?: boolean,
  /** when true then don't show error indicator */
  hideErrorIndicator?: boolean,
  /** align of the input value */
  align?: 'center' | 'left' | 'right',
  /** input placeholder */
  placeholder?: string,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
  /** callback to set input ref */
  insideRef?:(HTMLInputElement) => void,
  /** readonly */
  readOnly?: boolean,
  /** clearable */
  clearable?: boolean,
  /** html auto-complete representation */
  autoComplete?: boolean,
  /** disabled */
  disabled?: boolean,
  /** callback which called on clear */
  onClear?: () => void,
  /** html auto-focus representation */
  autoFocus?: boolean,
  step?: string | number,
  min?: string | number,
  max?: string | number,
  mask?: string,
};

const InputField = ({
  align,
  direction,
  hideErrorIndicator,
  hideErrorLabel,
  input,
  insideRef,
  label,
  maxLength,
  meta,
  placeholder,
  square,
  stretch,
  clearable,
  width,
  type,
  leftIcon,
  rightIcon,
  disabled,
  readOnly,
  autoComplete,
  autoFocus,
  onClear,
  step,
  min,
  max,
  mask,
  ...rest
  }: InputFieldProps) => {
  const { name, value, onChange, onFocus, onBlur } = input;

  const hasError = formUtils.hasError(meta);

  return (
    <FormField
      { ...rest }
      label={ label }
      stretch={ stretch }
      direction={ direction }
      hideErrorLabel={ hideErrorLabel }
      input={ input }
      meta={ meta }
    >
      <Input
        align={ align }
        hasError={ hasError }
        hideErrorIndicator={ hideErrorIndicator }
        insideRef={ insideRef }
        maxLength={ maxLength }
        name={ name }
        onBlur={ onBlur }
        onChange={ onChange }
        onFocus={ onFocus }
        placeholder={ placeholder }
        square={ square }
        value={ value }
        width={ width }
        type={ type }
        stretch={ stretch }
        clearable={ clearable }
        disabled={ disabled }
        readOnly={ readOnly }
        autoComplete={ autoComplete }
        leftIcon={ leftIcon }
        rightIcon={ rightIcon }
        onClear={ onClear }
        autoFocus={ autoFocus }
        step={ step }
        min={ min }
        max={ max }
        mask={ mask }
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

export { InputField };
