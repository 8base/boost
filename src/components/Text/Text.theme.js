import fp from 'lodash/fp';

import { PALETTE } from '../../theme';
import { createThemeTag } from '../../theme/createThemeTag';

const name = 'text';

const [TextTag, theme] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: props => ({
    margin: 0,
    cursor: props.cursor,
  }),

  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),

    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },

    disabled: {
      color: COLORS.DISABLED_TEXT_COLOR,
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

