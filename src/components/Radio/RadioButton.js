// @flow

import React, { useCallback } from 'react';
import { RadioTag, RadioButtonTag } from './Radio.theme';

import { Button } from '../Button';

type EqualsFuncArgument = {
  selectedValue?: string | number,
  value: string | number,
};

type RadioButtonClonedProps = {
  /** private cloned props */
  name?: string,
  /** private cloned props */
  onChange?: (string | number, SyntheticInputEvent<HTMLInputElement>) => void,
  /** private cloned props */
  selectedValue?: string | number,
  /** then true when show error styles */
  hasError?: boolean,
};

type RadioButtonProps = {
  /** text of the label */
  label?: string,
  /** radio value */
  value: string | number,
  /** when true then disable radio */
  disabled?: boolean,
  /** custom function to check the equals */
  equalsFunc?: (EqualsFuncArgument) => boolean,
};

const RadioButton = ({
  onChange,
  value,
  disabled,
  selectedValue,
  equalsFunc = ({ selectedValue, value }: EqualsFuncArgument) => selectedValue === value,
  name,
  label,
  ...rest
}: RadioButtonProps & RadioButtonClonedProps) => {
  const handleChange = useCallback((event) => {
    if (typeof onChange === 'function' && !disabled) {
      onChange(value, event);
    }
  }, [disabled, onChange, value]);

  const checked = value !== undefined && equalsFunc && equalsFunc({ selectedValue, value });

  return (
    <RadioButtonTag tagName="label">
      <Button tagName="div" { ...(checked ? {} : { variant: 'outlined' }) } disabled={ disabled } { ...rest }>
        <RadioTag tagName="input" type="radio" name={ name } onChange={ handleChange } checked={ checked } />
        { label }
      </Button>
    </RadioButtonTag>
  );
};

export { RadioButton };
