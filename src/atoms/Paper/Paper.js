// @flow

import React from 'react';

import { createStyledTag, createTheme, getThemeStyle } from '../../utils';

type PaperProps = {|
  children?: React$Node,
  padding: PropSizes,
|};

const name = 'paper';

const theme = createTheme(name, (colors: *): * => ({
  paper: {
    background: colors.WHITE,
    color: colors.BLACK,
    borderRadius: '.5rem',
    boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
    position: 'relative',
  },

  modifiers: {
    padding: {
      none: { padding: '0' },
      xs: { padding: '0.5rem' },
      sm: { padding: '1rem' },
      md: { padding: '2rem' },
      lg: { padding: '4rem' },
      xl: { padding: '8rem' },
    },
  },

  defaults: {
    padding: 'none',
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

export { Paper, theme };
