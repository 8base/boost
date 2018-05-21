// @flow

import React, { PureComponent } from 'react';
import { RadioCircleTag, RadioTag, RadioWrapperTag, RadioInnerCircleTag, RadioTextTag } from './Radio.theme';


type RadioItemClonedProps = {
  /** private cloned props */
  name?: string,
  /** private cloned props */
  onChange?: (mixed, SyntheticInputEvent<HTMLInputElement>) => void,
  /** private cloned props */
  selectedValue?: string | number,
}

type RadioItemProps = {
  /** text of the label */
  label?: string,
  /** radio value */
  value: string | number,
  /** possible colors */
  color?: 'primary' | 'secondary',
  /** when true then disable radio */
  disabled?: boolean,
} & RadioItemClonedProps

class RadioItem extends PureComponent<RadioItemProps> {
  static defaultProps = {
    color: 'primary',
  }

  onChange = (event: *) => {
    const { onChange, value, disabled } = this.props;

    onChange && !disabled && onChange(value, event);
  }

  render() {
    const {
      name,
      label,
      value,
      selectedValue,
      color,
      disabled,
    } = this.props;
    const hasLabel = !!label;
    const checked = value !== undefined && value === selectedValue;

    return (
      <RadioWrapperTag tagName="label">
        <RadioCircleTag tagName="div">
          <RadioInnerCircleTag tagName="div" color={ color } selected={ checked } disabled={ disabled } />
        </RadioCircleTag>
        <RadioTag name={ name } tagName="input" type="radio" value={ value.toString() } onChange={ this.onChange } />
        <If condition={ hasLabel }>
          <RadioTextTag tagName="div">{ label }</RadioTextTag>
        </If>
      </RadioWrapperTag>
    );
  }
}

export { RadioItem };
