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
    transition: 'width 0.3s',

    '&:hover': {
      '.NavigationItem-label': {
        transitionDelay: '0.15s',
        opacity: '1',
        visibility: 'visible',
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
    flexShrink: '0',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
  },
}));

const [NavigationItemLabel, themeItemLabel] = createThemeTag(`${name}ItemLabel`, {
  root: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    paddingRight: '20px',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.1s',
    whiteSpace: 'nowrap',
  },
});


const [NavigationItemLabelPreview, themeItemLabelPreview] = createThemeTag(`${name}ItemLabelPreview`, {
  root: {
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
});


const theme = {
  ...themeNavigation,
  ...themeItemMain,
  ...themeItemLabel,
  ...themeItemIcon,
  ...themeItemLabelPreview,
};

export {
  theme,
  NavigationTag,
  NavigationItemTag,
  NavigationItemLabel,
  NavigationItemIcon,
  NavigationItemLabelPreview,
};

