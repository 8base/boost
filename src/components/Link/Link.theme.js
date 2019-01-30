// @flow

import fp from 'lodash/fp';

import { PALETTE } from '../../theme';
import { createThemeTag } from '../../theme/createThemeTag';

const name = 'link';

const [LinkTag, theme] = createThemeTag(name, {
  root: {
    cursor: 'pointer',
    fontWeight: 400,
    fontSize: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),
    underline: {
      textDecoration: 'underline',
    },
  },
});

export {
  LinkTag,
  theme,
};

