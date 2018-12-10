import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type MenuItemProps = {|
  children?: React$Node,
|};

const name = 'menuItem';

const theme = createComponentTheme(name, (colors:*, sizes: *) => ({
  root: {
    color: colors.DSM.GREY_COLORS.DSM_DARK_GREY_2,
    fontSize: sizes.MAIN_FONT_SIZE,
    fontWeight: 400,
    lineHeight: '2.3rem',
    height: '4rem',
    paddingRight: '1.9rem',
    paddingLeft: '1.9rem',

    '&:hover': {
      backgroundColor: colors.PRIMARY_HOVER_GRAY_COLOR,
      color: colors.BLACK,
    },
  },
}));

const StyledTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

const MenuItem = ({ children, ...rest }: MenuItemProps) => (
  <StyledTag tagName="div" { ...rest } >
    { children }
  </StyledTag>
);

MenuItem.displayName = 'Menu.Item';

export { MenuItem, theme };
