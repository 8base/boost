// @flow

import React, { PureComponent } from 'react';
import fp from 'lodash/fp';
import InputMask from 'react-input-mask';

import { Icon } from '../Icon';
import { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag, InputClearButtonTag, InputArrowsTag, InputArrowTag } from './Input.theme';

type InputCommonProps = {
  /** field placeholder */
  placeholder?: string,
  /** html auto-complete representation */
  autoComplete?: boolean,
  /** html auto-focus representation */
  autoFocus?: boolean,
  /** disabled */
  disabled?: boolean,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** when true then don't show error indicator  */
  hideErrorIndicator?: boolean,
  /** align of the input value */
  align?: 'center' | 'left' | 'right',
  /** left icon componen */
  leftIcon?: React$Node,
  /** right icon componen */
  rightIcon?: React$Node,
  /** max symbols in the input value*/
  maxLength?: number,
  /** callback to set input ref */
  insideRef?:(HTMLInputElement) => void,
  /** kind of the input */
  kind?: 'bordered' | 'underline',
  /** readonly */
  readOnly?: boolean,
  /** clearable */
  clearable?: boolean,
  hideNumberArrows?: boolean,
};

type InputProps = {
  /** input name */
  name?: string,
  /** input value */
  value?: ?string | ?number,
  /** possible input types */
  type?: 'text' | 'number' | 'password' | 'email' | 'url',
  /** then true when show error styles */
  hasError?: boolean,
  /** text of the error */
  errorText?: string,
  /** mask string in the react-input-mask format */
  mask?: string,
  /** set custom input width in rem */
  width?: number,
  /** callback to change input value */
  onChange?: (value?: string | ?number, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  /** callback which called on clear */
  onClear?: () => void,
  step?: string | number,
  min?: string | number,
  max?: string | number,
} & InputCommonProps;

class Input extends PureComponent<InputProps> {
  static defaultProps = {
    align: 'left',
    autoComplete: false,
    hasError: false,
    hideErrorIndicator: false,
    stretch: true,
    type: 'text',
    kind: 'bordered',
    hideNumberArrows: true,
  }

  onChange = (event: *) => {
    const { onChange, type, maxLength } = this.props;
    const { value } = event.target;
    const hasNotMaxLength = maxLength === undefined;

    if (value.toString().length <= maxLength || hasNotMaxLength) {
      if (type === 'number') {
        onChange && onChange(!value ? value : Number(value), event);
      }
      else {
        onChange && onChange(value, event);
      }
    }
  }

  onArrowClick = (changeNumber: number) => {
    if (this.props.type !== 'number') {
      return;
    }

    const { onChange, maxLength } = this.props;
    const value = this.props.value || 0;
    const hasNotMaxLength = maxLength === undefined;

    // $FlowFixMe thinks that maxLength can be undefined in second statement
    if (hasNotMaxLength || value.toString().length <= maxLength) {
      onChange && onChange(Number(value) + changeNumber);
    }
  }

  onIncrementValue = () => {
    this.onArrowClick(1);
  }

  onDecrementValue = () => {
    this.onArrowClick(-1);
  }

  onClear = () => {
    const { onClear, onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange('');
    }

    if (typeof onClear === 'function') {
      onClear();
    }
  };

  render() {
    const {
      align,
      autoComplete,
      errorText,
      hasError,
      hideErrorIndicator,
      insideRef,
      leftIcon,
      mask,
      onBlur,
      onFocus,
      placeholder,
      rightIcon,
      width,
      stretch,
      type,
      value,
      name,
      kind,
      disabled,
      readOnly,
      clearable,
      onClear,
      autoFocus,
      step,
      min,
      max,
      hideNumberArrows,
      ...rest
    } = this.props;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;

    const inputProps = {
      align,
      autoComplete: autoComplete ? 'on' : 'off',
      hasError,
      hasLeftIcon,
      hasRightIcon,
      onBlur,
      onChange: this.onChange,
      onFocus,
      placeholder,
      width,
      type,
      value,
      insideRef,
      name,
      kind,
      disabled,
      readOnly,
      stretch,
      autoFocus,
      step,
      min,
      max,
    };

    return (
      <InputWrapperTag { ...fp.omit(['onChange'], rest) } stretch={ stretch } width={ width } tagName="div">
        <InputTag
          { ...inputProps }
          modifiers={ rest }
          mask={ mask }
          tagName={ mask ? InputMask : 'input' }
          hideNumberArrows={ hideNumberArrows }
        />
        <If condition={ !!hasError && !hideErrorIndicator }>
          <InputIndicatorTag modifiers={ rest } hasError={ hasError } tagName="div" />
        </If>
        <If condition={ hasLeftIcon }>
          <InputLeftIconTag modifiers={ rest } tagName="div">{ leftIcon }</InputLeftIconTag>
        </If>
        <If condition={ hasRightIcon && !clearable && type !== 'number' }>
          <InputRightIconTag modifiers={ rest } tagName="div">{ rightIcon }</InputRightIconTag>
        </If>
        <If condition={ type !== 'number' && !!clearable && !!value }>
          <InputClearButtonTag modifiers={ rest } onClick={ this.onClear } tagName="div">
            <Icon name="Delete" size="sm" />
          </InputClearButtonTag>
        </If>
        <If condition={ type === 'number' && !hideNumberArrows }>
          <InputArrowsTag modifiers={ rest } tagName="div">
            <InputArrowTag modifiers={ rest } onClick={ this.onIncrementValue } tagName="div">
              <Icon name="ChevronTop" size="stretch" />
            </InputArrowTag>
            <InputArrowTag modifiers={ rest } onClick={ this.onDecrementValue } tagName="div">
              <Icon name="ChevronDown" size="stretch" />
            </InputArrowTag>
          </InputArrowsTag>
        </If>
      </InputWrapperTag>
    );
  }
}

export { Input };
export type { InputCommonProps };
