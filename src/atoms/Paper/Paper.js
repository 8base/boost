// @flow

import React from 'react';

import { createStyledTag, createTheme, getThemeStyle } from '../../utils';
import type { PropSizes } from '../../types';

type PaperProps = {
  children?: React$Node,
  /** possible padding */
  padding?: PropSizes | 'xxl',
  /** when true then stetch cpontainer to the parent */
  stretch?: boolean,
  /** modifier to regulate border radius */
  borderRadius?: 'top' | 'bottom' | 'all',
  /** custom styles */
  style?: Object,
};

const name = 'paper';

const theme = createTheme(name, (colors: *, sizes: *): * => ({
  paper: {
    background: colors.WHITE,
    color: colors.BLACK,
    boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
    position: 'relative',
  },

  modifiers: {
    padding: {
      none: { padding: '0' },
      xs: { padding: '0.5rem' },
      sm: { padding: '1rem' },
      md: { padding: '2rem' },
      lg: { padding: '3rem' },
      xl: { padding: '4rem' },
      xxl: { padding: '8rem' },
    },
    borderRadius: {
      top: {
        borderTopLeftRadius: sizes.MAIN_BORDER_RADIUS,
        borderTopRightRadius: sizes.MAIN_BORDER_RADIUS,
      },
      bottom: {
        borderBottomLeftRadius: sizes.MAIN_BORDER_RADIUS,
        borderBottomhtRadius: sizes.MAIN_BORDER_RADIUS,
      },
      all: {
        borderRadius: sizes.MAIN_BORDER_RADIUS,
      },
    },
    stretch: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  },

  defaults: {
    padding: 'none',
    borderRadius: 'all',
  },
}));

const StyledTag = createStyledTag(name, props => ({
  display: 'flex',
  flexDirection: 'column',

  ...getThemeStyle(props, name).paper,
}));

function Paper({
  children,
  ...rest
  }: PaperProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

Paper.defaultProps = theme[name].defaults;

export { Paper, theme };
