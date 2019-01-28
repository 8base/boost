// @flow

import React, { PureComponent } from 'react';

import { Icon } from '../Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';

type CheckboxProps = {
  /** The name of the checkbox. */
  name?: string,
  /** The label of the checkbox. */
  label?: string,
  /** The checked state of the checkbox. */
  checked?: boolean,
  /** When true, show the checkbox with error styles. */
  hasError?: boolean,
  /** When true, the checkbox is disabled. */
  disabled?: boolean,
  /** When true, apply no wrap for the checkbox label. */
  nowrap?: boolean,
  /** The callback function to change checked state */
  onChange?: (value: boolean, event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** The callback function to on focus */
  onFocus?: (event: ?SyntheticFocusEvent<HTMLInputElement>) => void,
  /** The callback function to on blur */
  onBlur?: (event: ?SyntheticFocusEvent<HTMLInputElement>) => void,
};

class Checkbox extends PureComponent<CheckboxProps> {
  static defaultProps = {
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
    const { onChange, checked, hasError, disabled, label, nowrap, ...rest } = this.props;

    return (
      <CheckboxWrapperTag { ...rest } tagName="label">
        <CheckboxSquareTag hasError={ hasError } disabled={ disabled } tagName="div">
          <CheckboxIconTag checked={ checked } tagName="div">
            <Icon name="Check" size="xs" />
          </CheckboxIconTag>
        </CheckboxSquareTag>
        <CheckboxTag
          disabled={ disabled }
          checked={ checked }
          onChange={ this.onChange }
          type="checkbox"
          tagName="input"
        />
        <If condition={ !!label }>
          <CheckboxTextTag tagName="div" nowrap={ nowrap }>{ label }</CheckboxTextTag>
        </If>
      </CheckboxWrapperTag>
    );
  }
}

export { Checkbox };
