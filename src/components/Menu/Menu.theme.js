// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'menu';

const [MenuTag, themeMenu] = createThemeTag(name, {
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    overflow: 'hidden',

    paddingTop: '8px',
    paddingBottom: '8px',
  },
});


const [MenuItemTag, themeMenuItem] = createThemeTag(`${name}Item`, ({ COLORS, FONTS }: *) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    ...FONTS.BODY_3,
    height: '32px',
    paddingRight: '16px',
    paddingLeft: '16px',

    '&:hover': {
      backgroundColor: COLORS.PRIMARY_HOVER_GRAY_COLOR,
      color: COLORS.BLACK,
    },
  },
  modifiers: {
    disabled: {
      pointerEvents: 'none',
      cursor: 'default',
      color: COLORS.DISABLED_TEXT_COLOR,
    },
  },
}));


const theme = {
  ...themeMenu,
  ...themeMenuItem,
};

export {
  theme,
  MenuTag,
  MenuItemTag,
};

