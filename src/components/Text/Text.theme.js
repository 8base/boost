import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'text';

const [TextTag, theme] = createThemeTag(name, ({ COLORS, FONTS }: *): * => ({
  root: props => ({
    margin: 0,
    cursor: props.cursor,
  }),

  modifiers: {
    kind: {
      body: {
        ...FONTS.BODY_1,
      },
      'overline-1': {
        ...FONTS.OVERLINE_1,
      },
      'overline-2': {
        ...FONTS.OVERLINE_2,
      },
      'small-1': {
        ...FONTS.SMALL_1,
      },
      'small-2': {
        ...FONTS.SMALL_2,
      },
      subtitle: {
        ...FONTS.SUBTITLE,
      },
    },

    color: fp.mapValues(
      (color) => ({ color }),
      COLORS,
    ),

    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },

    disabled: {
      color: COLORS.PRIMARY_TEXT_COLOR,
    },

    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },

    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
}));


export {
  theme,
  TextTag,
};
