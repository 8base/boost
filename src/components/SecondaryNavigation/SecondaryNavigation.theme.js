// @flow

import { createThemeTag } from '../../theme/createThemeTag';

import { GREY_COLORS } from '../../theme/dsmColors';
import { theme as secondaryNavigationItemTheme } from './SecondaryNavigationItem';

const name = 'secondaryNavigation';

const [SecondaryNavigationTag, secondaryNavigationTheme] = createThemeTag(name, {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 'auto',

    backgroundColor: GREY_COLORS.DSM_LIGHT_GREY_3,
  },
});

const theme = {
  ...secondaryNavigationTheme,
  ...secondaryNavigationItemTheme,
};

export {
  theme,
  SecondaryNavigationTag,
};

