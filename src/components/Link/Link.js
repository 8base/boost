// @flow

import React from 'react';
import fp from 'lodash/fp';
import { PALETTE } from '../../theme';

import { createStyledTag, createComponentTheme } from '../../utils';

type LinkProps = {|
  children?: React$Node,
  color?: string,
  tagName?: string | React$Component<*>,
  text?: string,
  underline?: boolean,
|};

const name = 'link';

const theme = createComponentTheme(name, {
  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),
    underline: {
      textDecoration: 'underline',
    },
  },
  defaults: {
    color: 'LIGHT_BLUE',
    underline: false,
  },
});

const StyledTag = createStyledTag(name, () => ({
  cursor: 'pointer',
  fontWeight: 400,
  fontSize: 'inherit',
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
