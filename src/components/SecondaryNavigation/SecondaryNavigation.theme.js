// @flow

import { createThemeTag } from '../../theme/createThemeTag';

import { theme as secondaryNavigationItemTheme } from './SecondaryNavigationItem';

const name = 'secondaryNavigation';

const [SecondaryNavigationTag, secondaryNavigationTheme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 'auto',

    backgroundColor: COLORS.GRAY_10,
  },
}));

const theme = {
  ...secondaryNavigationTheme,
  ...secondaryNavigationItemTheme,
};

export {
  theme,
  SecondaryNavigationTag,
};

