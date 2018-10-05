import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { GREY_COLORS } from '../../theme/dsmColors';
import { SizeContext } from './SizeContext';

type MenuPlateProps = {|
  children?: React$Node,
  size?: 's' | 'm',
|};

const NAME = 'menuPlate';

const theme = createTheme(NAME, {
  modifiers: {
    size: {
      s: {
        borderRadius: '0 0 .5rem .5rem',
      },
      m: {
        marginTop: '.8rem',
        paddingTop: '.8rem',
        paddingBottom: '.8rem',
        borderRadius: '.5rem',
        boxShadow: '0 .4rem .8rem 0 rgba(0, 0, 0, 0.04)',
      },
    },
  },
  defaults: {
    size: 's',
  },
});

const StyledTag = createStyledTag(NAME, () => ({
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  border: `.1rem solid ${GREY_COLORS.LIGHT_GREY_1}`,
  display: 'flex',
  flexDirection: 'column',
}));

const MenuPlate = ({ children, ...rest }: MenuPlateProps) => (
  <StyledTag tagName="div" { ...rest } >
    <SizeContext.Provider value={ rest.size }>
      { children }
    </SizeContext.Provider>
  </StyledTag>
);

MenuPlate.displayName = 'Menu.Plate';

export { MenuPlate, theme };
