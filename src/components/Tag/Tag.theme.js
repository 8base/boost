import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

import { getContrastColor } from './Tag.utils';

const name = 'tag';

const [TagOuter, themeOuter] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: {
    margin: 0,
    minHeight: '24px',
    padding: '0 12px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  },

  modifiers: {
    color: fp.mapValues(
      (color) => ({
        backgroundColor: color,
        color: getContrastColor(color, {
          lightColor: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
          darkColor: COLORS.PRIMARY_TEXT_COLOR,
        }),
      }),
      COLORS,
    ),
  },
}));


const [TagInner, themeInner] = createThemeTag(`${name}Inner`, (): * => ({
  root: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const theme = {
  ...themeOuter,
  ...themeInner,
};

export {
  TagOuter,
  TagInner,
  theme,
};

