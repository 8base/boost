// @flow
import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'loader';

const [LoaderTag, themeLoader] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    display: 'inline-flex',
  },
  modifiers: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '64px',
        height: '64px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
    },
    color: fp.mapValues(color => ({ color }), COLORS),
  },
}));

const [LoaderWrapperTag, themeWrappers] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const theme = {
  ...themeLoader,
  ...themeWrappers,
};

export { LoaderTag, LoaderWrapperTag, theme };
