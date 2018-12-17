import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type MenuItemProps = {|
  children?: React$Node,
|};

const name = 'menuItem';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    color: COLORS.DSM.GREY_COLORS.DSM_DARK_GREY_2,
    fontSize: SIZES.BODY_TEXT,
    fontWeight: 400,
    lineHeight: '21px',
    height: '32px',
    paddingRight: '16px',
    paddingLeft: '16px',

    '&:hover': {
      backgroundColor: COLORS.PRIMARY_HOVER_GRAY_COLOR,
      color: COLORS.BLACK,
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
