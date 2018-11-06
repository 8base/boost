// @flow

import React from 'react';
import fp from 'lodash/fp';
import { PALETTE } from '../../../theme';

import { createStyledTag, createTheme } from '../../../utils';

type LinkProps = {|
  children?: React$Node,
  color?: string,
  size?: 'sm' | 'md' | 'lg' | 'inherit',
  tagName?: string | React$Component<*>,
  text?: string,
  underline?: boolean,
|};

const name = 'link';

const theme = createTheme(name, () => ({
  modifiers: {
    size: {
      lg: {
        fontSize: '1.6rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      sm: {
        fontSize: '1.2rem',
        lineHeight: '2rem',
      },
      inherit: {
        fontSize: 'inherit',
      },
    },
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),
    underline: {
      textDecoration: 'underline',
    },
  },
  defaults: {
    size: 'md',
    color: 'LIGHT_BLUE',
    underline: false,
  },
}));

const StyledTag = createStyledTag(name, () => ({
  cursor: 'pointer',
  fontFamily: 'Poppins',
  fontWeight: 400,
  lineHeight: '1',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

function Link({
  text,
  children,
  tagName,
  ...rest
  }: LinkProps) {
  return <StyledTag { ...rest } tagName={ tagName }>{ text || children }</StyledTag>;
}

Link.defaultProps = {
  ...theme[name].defaults,
  tagName: 'a',
};

export { Link, theme };
