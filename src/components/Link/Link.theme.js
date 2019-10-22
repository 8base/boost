// @flow

import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'link';

const [LinkTag, theme] = createThemeTag(name, ({ COLORS, FONTS }) => ({
  root: {
    cursor: 'pointer',
    ...FONTS.LINK,
    fontSize: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
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
