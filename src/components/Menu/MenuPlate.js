import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Paper } from '../Paper';

type MenuPlateProps = {|
  children?: React$Node,
|};

const name = 'menuPlate';

const theme = createComponentTheme(name, {
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
});

const StyledTag = createStyledTag(name, () => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

const MenuPlate = ({ children, ...rest }: MenuPlateProps) => (
  <Paper padding="none" borderRadius="all">
    <StyledTag tagName="div" { ...rest } >
      { children }
    </StyledTag>
  </Paper>
);

MenuPlate.displayName = 'Menu.Plate';

export { MenuPlate, theme };
