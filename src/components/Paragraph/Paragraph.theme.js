import { createThemeTag } from '../../theme/createThemeTag';


const name = 'paragraph';

const [ParagraphTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: {
    fontWeight: 400,
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    margin: 0,
  },
  modifiers: {
    kind: {
      primary: {
        color: COLORS.DARK_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: COLORS.DARK_SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: COLORS.DARK_DISABLED_TEXT_COLOR,
      },
      white: {
        color: COLORS.WHITE,
      },
    },
  },
}));

export {
  ParagraphTag,
  theme,
};

