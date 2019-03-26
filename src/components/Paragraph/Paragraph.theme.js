import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';
import { PALETTE } from '../../theme';

const name = 'paragraph';

const [ParagraphTag, theme] = createThemeTag(name, ({ SIZES }: *) => ({
  root: props => ({
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    margin: 0,
    '& > *': {
      verticalAlign: props.verticalAlign,
    },
  }),
  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),
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
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },
  },
}));

export {
  ParagraphTag,
  theme,
};

