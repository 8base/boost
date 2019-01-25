import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

import { getContrastColor } from './Tag.utils';

const name = 'tag';

const [TagOuter, theme] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: {
    margin: 0,
    height: '24px',
    padding: '0 12px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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


export {
  TagOuter,
  theme,
};

