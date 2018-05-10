// @flow

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { createStyledTag, createTheme } from '../../utils';

type LinkProps = {|
  to: string,
  text?: string,
  children?: React$Node,
|};

const name = 'link';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, (props) => ({
  color: props.theme.COLORS.PRIMARY_LINK_COLOR,
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '28px',
  textDecoration: 'none',
}));

function Link({
  text,
  children,
  ...rest
  }: LinkProps) {
  return <StyledTag tagName={ RouterLink } { ...rest }>{ text || children }</StyledTag>;
}

export { Link, theme };
