import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { GREY_COLORS } from '../../theme/dsmColors';
import { SizeContext } from './SizeContext';

type MenuItemProps = {|
  children?: React$Node,
|};

const NAME = 'menuItem';

const theme = createTheme(NAME, {
  modifiers: {
    size: {
      s: {
        height: '3.2rem',
        lineHeight: '3.2rem',
        paddingRight: '1.6rem',
        paddingLeft: '1.6rem',
      },
      m: {
        height: '4rem',
        lineHeight: '2.3rem',
        paddingRight: '1.9rem',
        paddingLeft: '1.9rem',
      },
    },
  },
  defaults: {
    size: 's',
  },
});

const StyledTag = createStyledTag(NAME, () => ({
  color: GREY_COLORS.DARK_GREY_2,
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: GREY_COLORS.LIGHT_GREY_3,
    color: GREY_COLORS.BLACK,
  },
}));

const MenuItem = ({ children, ...rest }: MenuItemProps) => (
  <SizeContext.Consumer>
    { size => (
      <StyledTag tagName="div" size={ size } { ...rest } >
        { children }
      </StyledTag>
    ) }
  </SizeContext.Consumer>
);

MenuItem.displayName = 'Menu.Item';

export { MenuItem, theme };
