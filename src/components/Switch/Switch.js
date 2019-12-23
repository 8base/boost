// @flow

import React from 'react';
import {
  SwitchTag,
  SwitchInputTag,
  SwitchApperanceTag,
  SwitchLabelTag,
} from './Switch.theme';

type SwitchProps = {
  label?: string,
  name?: string,
  value: boolean,
  onChange?: (boolean, SyntheticInputEvent<HTMLInputElement>) => void,
  inverted?: boolean,
};

class Switch extends React.Component<SwitchProps> {
  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange(e.target.checked, e);
    }
  };

  render() {
    const { label, value, name, onChange, ...rest } = this.props;

    return (
      <SwitchTag tagName="label" { ...rest }>
        <SwitchInputTag modifiers={ rest } tagName="input" type="checkbox" name={ name } checked={ value } onChange={ this.onChange } />
        <SwitchApperanceTag modifiers={ rest } value={ value } />
        { label && <SwitchLabelTag modifiers={ rest }>{ label }</SwitchLabelTag> }
      </SwitchTag>
    );
  }
}

export { Switch };

