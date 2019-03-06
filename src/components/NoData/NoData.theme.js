//@flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'noData';

const [NoDataIconContainerTag, themeIconContainer] = createThemeTag(
  `${name}IconContainer`,
  {
    root: {
      height: '80px',
    },
  },
);

const [NoDataTextTag, themeText] = createThemeTag(
  `${name}Text`,
  ({ COLORS }: *) => ({
    root: {
      color: COLORS.DISABLED_TEXT_COLOR,
      fontSize: '32px',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  }),
);

const theme = {
  ...themeIconContainer,
  ...themeText,
};

export {
  NoDataIconContainerTag,
  NoDataTextTag,
  theme,
};

