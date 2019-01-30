// @flow
import fp from 'lodash/fp';

import { SECONDARY_COLORS, MAIN_BRAND_COLORS } from '../../theme/dsmColors';
import { PALETTE } from '../../theme';
import { createThemeTag } from '../../theme/createThemeTag';

const name = 'icon';

const [IconWrapperTag, themeWrapper] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'inline-flex',
    lineHeight: 1,
  },
  modifiers: {
    color: {
      ...fp.mapValues(
        (color) => ({ color }),
        {
          ...PALETTE,
          ...SECONDARY_COLORS,
          ...MAIN_BRAND_COLORS,
        },
      ),
    },
    size: {
      stretch: {
        height: '100%',
        width: '100%',
      },
    },
  },
});


const [IconSvgTag, themeSvg] = createThemeTag(`${name}Svg`, {
  modifiers: {
    size: {
      xs: {
        width: '12px',
        height: '12px',
      },
      sm: {
        width: '18px',
        height: '18px',
      },
      md: {
        width: '24px',
        height: '24px',
      },
      lg: {
        width: '36px',
        height: '36px',
      },
      xl: {
        width: '48px',
        height: '48px',
      },
      stretch: {
        height: '100%',
        width: '100%',
      },
    },
  },
});


const [IconFontTag, themeFonts] = createThemeTag(`${name}Font`, {
  modifiers: {
    size: {
      xs: {
        fontSize: '12px',
      },
      sm: {
        fontSize: '18px',
      },
      md: {
        fontSize: '24px',
      },
      lg: {
        fontSize: '36px',
      },
      xl: {
        fontSize: '48px',
      },
    },
  },
});


const theme = {
  ...themeWrapper,
  ...themeFonts,
  ...themeSvg,
};

export {
  theme,
  IconWrapperTag,
  IconSvgTag,
  IconFontTag,
};

