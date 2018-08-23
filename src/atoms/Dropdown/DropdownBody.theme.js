// @flow

import { createStyledTag, createTheme } from '../../utils';
import type { PropSizes } from '../../types';

const name = 'dropdownBody';

const theme = createTheme(name, {
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
      xs: { padding: '0.5rem' },
      sm: { padding: '1rem' },
      md: { padding: '1.5rem' },
      lg: { padding: '2rem' },
      xl: { padding: '2.5rem' },
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
  xs: '0, 2.5px',
  sm: '0, 5px',
  md: '0, 7.5px',
  xl: '0, 10px',
  lg: '0, 15px',
};

const DropdownBodyTag = createStyledTag(name, {
  borderRadius: '.25rem',
});

const defaultTheme = theme[name].defaults;

export { theme, defaultTheme, offsetSizes, DropdownBodyTag };
