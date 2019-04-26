// @flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'indicator';

const [IndicatorContainerTag, themeContainer] = createThemeTag(
  `${name}Container`,
  () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

const [IndicatorTag, themeIndicator] = createThemeTag(
  name,
  ({ COLORS }) => ({
    root: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '8px',
    },

    modifiers: {
      status: {
        enabled: { backgroundColor: COLORS.GREEN },
        disabled: { backgroundColor: COLORS.DISABLED_TEXT_COLOR },
      },
    },
  }),
);

const theme = {
  ...themeContainer,
  ...themeIndicator,
};

export {
  IndicatorContainerTag,
  IndicatorTag,
  theme,
};

