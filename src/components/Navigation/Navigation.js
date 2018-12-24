import React from 'react';
import fp from 'lodash/fp';

import { createStyledTag, createComponentTheme } from '../../utils';
import { PALETTE } from '../../theme';

import { NavigationItem, theme as navigationItemTheme } from './NavigationItem';


type NavigationProps = {|
  children?: React.Node,
  color: $Keys<typeof PALETTE>
|};

const name = 'navigationPlate';

const navigationTheme = createComponentTheme(name, {
  root: {
    width: '60px',
  },
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
});

const theme = {
  ...navigationTheme,
  ...navigationItemTheme,
};

const NavigationTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  '&:hover': {
    width: 'auto',

    '.NavigationItem-label': {
      display: 'flex',
    },
  },
});

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

Navigation.Item = NavigationItem;

export { Navigation, theme };
