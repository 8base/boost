import React from 'react';
import fp from 'lodash/fp';

import { createStyledTag, createComponentTheme } from '../../utils';
import { PALETTE } from '../../theme';

type NavigationPlateProps = {|
  children?: React.Node,
  color: $Keys<typeof PALETTE>
|};

const name = 'navigationPlate';

const theme = createComponentTheme(name, {
  root: {
    width: '60px',
  },
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
});

const StyledTag = createStyledTag(name, {
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

function NavigationPlate({
  children,
  color,
  ...rest
  }: NavigationPlateProps) {
  return (
    <StyledTag { ...rest } color={ color } tagName="nav">
      {
        React.Children.map(children, child =>
          React.cloneElement(child, { color: child.props.color || color }),
        )
      }
    </StyledTag>
  );
}

export { NavigationPlate, theme };
