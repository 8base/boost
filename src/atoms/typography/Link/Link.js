// @flow

import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type LinkProps = {|
  to: string,
  text?: string,
  children?: React$Node,
  component?: React$Node,
|};

const name = 'link';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, (props) => ({
  cursor: 'pointer',
  color: props.theme.COLORS.PRIMARY_LINK_COLOR,
  fontFamily: 'Poppins',
  fontSize: '1.4rem',
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
  component,
  ...rest
  }: LinkProps) {
  return <StyledTag { ...rest } tagName={ component }>{ text || children }</StyledTag>;
}

Link.defaultProps = {
  ...theme[name].defaults,
  component: 'a',
};

export { Link, theme };
