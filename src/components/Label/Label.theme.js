// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'label';

const [LabelTag, theme] = createThemeTag(name, ({ COLORS, FONTS }: *) => ({
  root: {
    ...FONTS.OVERLINE_1,
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

