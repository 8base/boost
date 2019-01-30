// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'heading';

const [HeadingTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: {
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        fontSize: SIZES.HEADING_1,
        lineHeight: SIZES.HEADING_1_LH,
      },
      h2: {
        fontSize: SIZES.HEADING_2,
        lineHeight: SIZES.HEADING_2_LH,
      },
      h3: {
        fontSize: SIZES.HEADING_3,
        lineHeight: SIZES.HEADING_3_LH,
      },
      h4: {
        fontSize: SIZES.HEADING_4,
        lineHeight: SIZES.HEADING_4_LH,
      },
      h5: {
        fontSize: SIZES.HEADING_5,
        lineHeight: SIZES.HEADING_5_LH,
      },
      h6: {
        fontSize: SIZES.HEADING_6,
        lineHeight: SIZES.HEADING_6_LH,
      },
    },
    kind: {
      primary: {
        color: COLORS.TEXT_PRIMARY,
      },
      secondary: {
        color: COLORS.TEXT_SECONDARY,
      },
      disabled: {
        color: COLORS.DISABLED_TEXT_COLOR,
      },
      white: {
        color: COLORS.WHITE,
      },
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
  },
}));

export {
  HeadingTag,
  theme,
};

