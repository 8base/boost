// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'heading';

const [HeadingTag, theme] = createThemeTag(name, ({ COLORS, SIZES, FONTS }: *) => ({
  root: {
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        ...FONTS.H1,
      },
      h2: {
        ...FONTS.H2,
      },
      h3: {
        ...FONTS.H3,
      },
      h4: {
        ...FONTS.H4,
      },
    },
    kind: {
      primary: {
        color: COLORS.PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: COLORS.SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: COLORS.DISABLED_TEXT_COLOR,
      },
      white: {
        color: COLORS.WHITE,
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
  HeadingTag,
  theme,
};

