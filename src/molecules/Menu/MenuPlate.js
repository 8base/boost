import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Paper } from '../../atoms/';

type MenuPlateProps = {|
  children?: React$Node,
|};

const NAME = 'menuPlate';

const theme = createComponentTheme(NAME, {});

const StyledTag = createStyledTag(NAME, () => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  paddingTop: '.8rem',
  paddingBottom: '.8rem',
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
