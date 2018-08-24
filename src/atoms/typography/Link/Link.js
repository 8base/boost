// @flow

import React from 'react';
import fp from 'lodash/fp';
import { PALETTE } from '../../../theme';

import { createStyledTag, createTheme } from '../../../utils';

type LinkProps = {|
  to?: string,
  text?: string,
  tagName: string | React$Component<*>,
  children?: React$Node,
  component?: React$Node,
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
