// @flow

import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'link';

const [LinkTag, theme] = createThemeTag(name, ({ COLORS, FONTS }) => ({
  root: props => ({
    cursor: 'pointer',
    ...FONTS.LINK,
    fontSize: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    ...((props.color === 'BLUE_30' || props.color === 'BLUE' || props.color === 'PRIMARY') ? {
      '&:active': {
        color: COLORS.BLUE_10,
      },
    } : {}),
  }),
  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      COLORS,
    ),
    underline: {
      textDecoration: 'underline',
    },
  },
}));

export {
  LinkTag,
  theme,
};
