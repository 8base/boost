// @flow

import React, { PureComponent } from 'react';

import { Icon } from '../Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';

type CheckboxProps = {
  /** checked state */
  checked: boolean | string,
  /** indeterminate state, useful for sub-options */
  indeterminate: boolean,
  /** checkbox name */
  name?: string,
  /** checkbox label */
  label?: string,
  /** when error then show error styles */
  hasError?: boolean,
  /** show disabled styles  */
  disabled?: boolean,
  /** no wrap text  */
  nowrap?: boolean,

  /** callback to change chcked state */
  onChange?: (boolean, SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (?SyntheticFocusEvent<HTMLInputElement>) => void,
}

type CheckboxState = {
  iconName: 'Check' | 'Minus',
}

class Checkbox extends PureComponent<CheckboxProps, CheckboxState> {
  static defaultProps = {
    checked: false,
    hasError: false,
    disabled: false,
    indeterminate: false,
  }

  static getDerivedStateFromProps(props: CheckboxProps) {
    if (props.indeterminate) {
      return { iconName: 'Minus' };
    }

    if (props.checked) {
      return { iconName: 'Check' };
    }

    return null;
  }

  state = {
    iconName: this.props.indeterminate ? 'Minus' : 'Check',
  }

  // $FlowFixMe
  inputRef = React.createRef();

  componentDidMount() {
    this.handleIndeterminate();
  }

  componentDidUpdate(prevProps: CheckboxProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.handleIndeterminate();
    }
  }

  handleIndeterminate() {
    const { current: inputElement } = this.inputRef;

    if (inputElement) {
      inputElement.indeterminate = this.props.indeterminate;
    }
  }

  onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const { onChange, disabled } = this.props;

    onChange && !disabled && onChange(checked, event);
  }

  render() {
    const { onChange, label, ...rest } = this.props;
    const iconModifiers = { isShown: rest.checked || rest.indeterminate };

    return (
      <CheckboxWrapperTag { ...rest } tagName="label">
        <CheckboxSquareTag modifiers={ rest } tagName="div">
          <CheckboxIconTag modifiers={ iconModifiers } tagName="div">
            <Icon name={ this.state.iconName } size="xs" />
          </CheckboxIconTag>
        </CheckboxSquareTag>
        <CheckboxTag
          modifiers={ rest }
          checked={ rest.indeterminate ? false : rest.checked }
          disabled={ rest.disabled }
          onChange={ this.onChange }
          insideRef={ this.inputRef }
          type="checkbox"
          tagName="input"
        />
        <If condition={ !!label }>
          <CheckboxTextTag modifiers={ rest } tagName="div">{ label }</CheckboxTextTag>
        </If>
      </CheckboxWrapperTag>
    );
  }
}

export { Checkbox };
