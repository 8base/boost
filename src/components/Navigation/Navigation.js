import React from 'react';
import { PALETTE } from '../../theme';

import { NavigationTag } from './Navigation.theme';
import { NavigationItem } from './NavigationItem';


type NavigationProps = {|
  children?: React.Node,
  color: $Keys<typeof PALETTE>
|};

const Navigation = ({
  children,
  color,
  ...rest
  }: NavigationProps) => {
  return (
    <NavigationTag { ...rest } color={ color } tagName="nav">
      {
        React.Children.map(children, child =>
          React.cloneElement(child, { color: child.props.color || color }),
        )
      }
    </NavigationTag>
  );
};

Navigation.displayName = 'Navigation';

Navigation.Item = NavigationItem;

export { Navigation };
