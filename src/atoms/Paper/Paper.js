// @flow

import React from 'react';

import { createStyledTag, createTheme, getThemeStyle } from '../../utils';

type PaperProps = {|
  children?: React$Node,
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

  modifiers: {},
  defaults: {},
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
