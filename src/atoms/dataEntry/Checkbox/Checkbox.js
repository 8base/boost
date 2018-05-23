// @flow

import React, { PureComponent } from 'react';

import { Icon } from 'atoms/typography/Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';

type CheckboxProps = {
  /** checkbox name */
  name?: string,
  /** checkbox label */
  label?: string,
  /** color of the check */
  color?: 'primary' | 'secondary',
  /** checked state */
  checked?: boolean,
  /** when error then show error styles */
  hasError?: boolean,
  /** when error then show disabled styles  */
  disabled?: boolean,

  /** callback to change chcked state */
  onChange?: (boolean, SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
}

class Checkbox extends PureComponent<CheckboxProps> {
  static defaultProps = {
    color: 'primary',
    checked: false,
    hasError: false,
    disabled: false,
  }

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const { onChange, disabled } = this.props;

    onChange && !disabled && onChange(checked, event);
  }

  render() {
    const { onChange, checked, hasError, disabled, label, color, ...rest } = this.props;

    return (
      <CheckboxWrapperTag { ...rest } tagName="label">
        <CheckboxSquareTag hasError={ hasError } disabled={ disabled } tagName="div">
          <CheckboxIconTag checked={ checked } color={ color } tagName="div">
            <Icon name="Check" size="xs" />
          </CheckboxIconTag>
        </CheckboxSquareTag>
        <CheckboxTag checked={ checked } onChange={ this.onChange } type="checkbox" tagName="input" />
        <CheckboxTextTag tagName="div">{ label }</CheckboxTextTag>
      </CheckboxWrapperTag>
    );
  }
}

export { Checkbox };
