import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type NavigationPlateProps = {|
  children?: React.Node,
|};

const name = 'navigationPlate';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
});

function NavigationPlate({
  children,
  ...rest
  }: NavigationPlateProps) {
  return <StyledTag tagName="nav" {...rest}>{children}</StyledTag>;
}

export { NavigationPlate, theme };