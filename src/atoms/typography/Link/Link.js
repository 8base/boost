// @flow

import React from 'react';

import { createStyledTag, createTheme } from '../../../utils';

type LinkProps = {|
  to?: string,
  text?: string,
  tagName: string | React$Component<*>,
  children?: React$Node,
  component?: React$Node,
|};

const name = 'link';

const theme = createTheme(name, (colors: *) => ({
  modifiers: {
    size: {
      lg: {
        fontSize: '1.8rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      sm: {
        fontSize: '1.2rem',
      },
    },
    color: {
      primary: {
        color: colors.PRIMARY_LINK_COLOR,
      },
      white: {
        color: colors.WHITE,
      },
      red: {
        color: colors.RED,
      },
    },
    underline: {
      textDecoration: 'underline',
    },
  },
  defaults: {
    size: 'md',
    color: 'primary',
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
