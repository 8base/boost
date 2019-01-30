// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'label';

const [LabelTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: {
    fontWeight: 400,
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
    margin: 0,
  },
  modifiers: {
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
    },
  },
}));

export {
  theme,
  LabelTag,
};

