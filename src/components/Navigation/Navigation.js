// @flow

import React from 'react';
import { COLORS } from '../../theme';

import { NavigationTag } from './Navigation.theme';
import { NavigationItem } from './NavigationItem';


type NavigationProps = {
  children?: React$Node,
  expandedWidth?: number | string,
  collapsedWidth?: number | string,
  color: $Keys<typeof COLORS>,
  expanded?: boolean,
};

class Navigation extends React.Component<NavigationProps> {
  static displayName = 'Navigation';

  static Item = NavigationItem;

  static defaultProps = {
    expandedWidth: 196,
    collapsedWidth: 56,
  };

  render() {
    const { color, children, expanded, ...rest } = this.props;

    return (
      <NavigationTag { ...rest } expanded={ expanded } color={ color } tagName="nav">
        {
          React.Children.map(children, child =>
            React.cloneElement(child, {
              color: child.props.color || color,
              parentExpanded: expanded,
            }),
          )
        }
      </NavigationTag>
    );
  }
}

export { Navigation };
