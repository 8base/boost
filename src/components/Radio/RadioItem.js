// @flow

import React, { PureComponent } from 'react';
import { RadioCircleTag, RadioTag, RadioWrapperTag, RadioCircleInnerTag, RadioTextTag } from './Radio.theme';


type EqualsFuncArgument = {
  selectedValue?: string | number | boolean,
  value: string | number | boolean,
}

type RadioItemClonedProps = {
  /** private cloned props */
  name?: string,
  /** private cloned props */
  onChange?: (string | number | boolean, SyntheticInputEvent<HTMLInputElement>) => void,
  /** private cloned props */
  selectedValue?: string | number,
  /** then true when show error styles */
  hasError?: boolean,
}

type RadioItemProps = {
  children?: any,
  /** text of the label */
  label?: string,
  /** radio value */
  value: string | number | boolean,
  /** possible colors */
  color?: 'primary' | 'secondary',
  /** when true then disable radio */
  disabled?: boolean,
  /** custom function to check the equals */
  equalsFunc?: (EqualsFuncArgument) => boolean,
}

class RadioItem extends PureComponent<RadioItemProps & RadioItemClonedProps> {
  static defaultProps = {
    color: 'primary',
    equalsFunc: ({ selectedValue, value }: EqualsFuncArgument) => selectedValue === value,
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
      equalsFunc,
      onChange,
      children,
      ...rest
    } = this.props;
    const hasLabel = !!label;
    const checked = value !== undefined && equalsFunc && equalsFunc({ selectedValue, value });

    return (
      <RadioWrapperTag tagName="label" { ...rest }>
        <RadioTag modifiers={ rest } name={ name } tagName="input" type="radio" onChange={ this.onChange } checked={ checked } />
        <Choose>
          <When condition={ typeof children === 'function' }>
            { /* $FlowIgnore */ }
            { children({ checked }) }
          </When>
          <When condition={ !!children }>
            { /* $FlowIgnore */ }
            { children }
          </When>
          <Otherwise>
            <RadioCircleTag modifiers={ rest } tagName="div" >
              <RadioCircleInnerTag modifiers={ rest } tagName="div" checked={ checked } />
            </RadioCircleTag>
            <If condition={ hasLabel }>
              <RadioTextTag modifiers={ rest } tagName="div">{ label }</RadioTextTag>
            </If>
          </Otherwise>
        </Choose>
      </RadioWrapperTag>
    );
  }
}

export { RadioItem };
