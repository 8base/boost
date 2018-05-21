// @flow

import React, { PureComponent } from 'react';
import { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag } from './Input.theme';

type InputCommonProps = {
  /** field placeholder */
  placeholder?: string,
  /** html auto-complete representation */
  autoComplete?: boolean,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** when true then don't show error indicator  */
  hideIndicator?: boolean,
  /** left icon componen */
  leftIcon?: React$Node,
  /** right icon componen */
  rightIcon?: React$Node,
}

type InputProps = {
  /** input name */
  name?: string,
  /** input value */
  value?: string,
  /** possible input types */
  type?: 'text' | 'number' | 'password' | 'email' | 'url',
  /** then true when show error styles */
  hasError?: boolean,
  /** text of the error */
  errorText?: string,
  /** callback to change input value */
  onChange?: (value?: string | number, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
} & InputCommonProps

class Input extends PureComponent<InputProps> {
  static defaultProps = {
    type: 'text',
    stretch: false,
    hideIndicator: false,
    autoComplete: false,
    hasError: false,
  }

  onChange = (event: *) => {
    const { onChange, type } = this.props;
    const { value } = event.target;
    if (type === 'number') {
      onChange && onChange(Number(value) || undefined, event);
    }
    else {
      onChange && onChange(value, event);
    }
  }

  render() {
    const { hasError, hideIndicator, autoComplete, stretch, errorText, leftIcon, rightIcon, ...rest } = this.props;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;
    const htmlAutoComplete = autoComplete ? 'on' : 'off';

    return (
      <InputWrapperTag stretch={ stretch } tagName="div">
        <InputTag
          { ...rest }
          hasError={ hasError }
          hasLeftIcon={ hasLeftIcon }
          hasRightIcon={ hasRightIcon }
          onChange={ this.onChange }
          autoComplete={ htmlAutoComplete }
          tagName="input"
        />
        <If condition={ !!hasError && !hideIndicator }>
          <InputIndicatorTag hasError={ hasError } tagName="div" />
        </If>
        <If condition={ hasLeftIcon }>
          <InputLeftIconTag tagName="div">{ leftIcon }</InputLeftIconTag>
        </If>
        <If condition={ hasRightIcon }>
          <InputRightIconTag tagName="div">{ rightIcon }</InputRightIconTag>
        </If>
      </InputWrapperTag>
    );
  }
}

export { Input };
export type { InputCommonProps };
