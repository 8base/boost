// @flow

import { createStyledTag, createComponentTheme } from '../../utils';
import type { PropSizes } from '../../types';

const name = 'dropdownBody';

const theme = createComponentTheme(name, {
  root: {
    borderRadius: '4px',
  },

  modifiers: {
    stretch: {
      width: '100%',
    },

    background: {
      white: {
        backgroundColor: '#fff',
        border: '1px solid #d0d7dd',
        boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
      },
      dark: {
        backgroundColor: '#323c47',
        color: '#fff',
      },
      none: {
        backgroundColor: 'transparent',
      },
    },

    padding: {
      none: { padding: '0' },
      xs: { padding: '4px' },
      sm: { padding: '8px' },
      md: { padding: '16px' },
      lg: { padding: '24px' },
      xl: { padding: '32px' },
    },
  },
  defaults: {
    background: 'none',
    padding: 'none',
    borderRadius: 'md',
  },
});

const offsetSizes: { [PropSizes]: string } = {
  none: '0',
  xs: '0, 2px',
  sm: '0, 4px',
  md: '0, 8px',
  xl: '0, 16px',
  lg: '0, 24px',
};

const DropdownBodyTag = createStyledTag(name, {});

const defaultTheme = theme[name].defaults;

export { theme, defaultTheme, offsetSizes, DropdownBodyTag };
