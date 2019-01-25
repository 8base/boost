// @flow
import fp from 'lodash/fp';
import color from 'color';

import { PALETTE } from '../../theme';
import { createThemeTag } from '../../theme/createThemeTag';

const name = 'navigation';

const [NavigationTag, themeNavigation] = createThemeTag(name, {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60px',

    '&:hover': {
      width: 'auto',

      '.NavigationItem-label': {
        display: 'flex',
      },
    },
  },
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
});


const [NavigationItemTag, themeItemMain] = createThemeTag(`${name}Item`, ({ COLORS }) => ({
  root: props => ({
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none',
    userSelect: 'none',
    display: 'flex',
    color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,

    '&:hover, &.active': {
      backgroundColor: color(PALETTE[props.color]).darken(0.2).hex(),
    },
  }),
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
}));

const [NavigationItemIcon, themeItemIcon] = createThemeTag(`${name}ItemIcon`, ({ COLORS }) => ({
  root: {
    display: 'flex',
    width: '60px',
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
  },
}));

const [NavigationItemLabel, themeItemLabel] = createThemeTag(`${name}ItemLabel`, {
  root: {
    display: 'none',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    paddingRight: '20px',
  },
});


const theme = {
  ...themeNavigation,
  ...themeItemMain,
  ...themeItemLabel,
  ...themeItemIcon,
};

export {
  theme,
  NavigationTag,
  NavigationItemTag,
  NavigationItemLabel,
  NavigationItemIcon,
};

