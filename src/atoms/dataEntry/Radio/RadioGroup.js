// @flow
import React, { PureComponent } from 'react';
import { FlexLayout } from '../../FlexLayout';
import type { PropSizes } from '../../../types';


type RadioProps = {
  children: React$Node,
  /** optional name of the group */
  name?: string,
  /** selected value */
  value?: string | number,
  /** offset between radio items */
  gap?: PropSizes,
  /** direction of the radio items */
  direction?: 'row' | 'column',
  /** callback to change the radio state */
  onChange?: (string | number, SyntheticInputEvent<HTMLInputElement>) => void,
  /** then true when show error styles */
  hasError?: boolean,
}

class RadioGroup extends PureComponent<RadioProps> {
  static instanceCounter = 0;

  static defaultProps = {
    direction: 'column',
    gap: 'md',
  }

  componentWillMount() {
    RadioGroup.instanceCounter++;
  }

  getGroupName = () => {
    const { name } = this.props;

    return name || `radio-group-${RadioGroup.instanceCounter}`;
  }

  render() {
    const { children, value, direction, gap, onChange, hasError } = this.props;

    return (
      <FlexLayout direction={ direction } gap={ gap }>
        {
          React.Children.map(children, child =>
            React.cloneElement(child, {
              onChange,
              selectedValue: value,
              name: this.getGroupName(),
              hasError,
            }))
        }
      </FlexLayout>
    );
  }
}

export { RadioGroup };
