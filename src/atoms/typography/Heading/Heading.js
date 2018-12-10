import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type HeadingProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  text?: string,
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  weight?: 'light' | 'normal' | 'semibold' | 'bold',
|};

const name = 'heading';

const theme = createComponentTheme(name, (colors) => ({
  root: {
    lineHeight: 1.1,
    fontWeight: 400,
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        fontSize: '6.2rem',
      },
      h2: {
        fontSize: '4.6rem',
      },
      h3: {
        fontSize: '3rem',
      },
      h4: {
        fontSize: '2rem',
      },
      h5: {
        fontSize: '1.4rem',
      },
      h6: {
        fontSize: '1rem',
      },
    },
    kind: {
      primary: {
        color: colors.TEXT_PRIMARY,
      },
      secondary: {
        color: colors.TEXT_SECONDARY,
      },
      disabled: {
        color: colors.DISABLED_TEXT_COLOR,
      },
      white: {
        color: colors.WHITE,
      },
    },
    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
  defaults: {
    kind: 'primary',
    weight: 'normal',
  },
}));

const StyledTag = createStyledTag(name);

function Heading({
  text,
  children,
  type,
  ...rest
  }: HeadingProps) {
  return <StyledTag { ...rest } tagName={ type } type={ type }>{ children || text }</StyledTag>;
}

export { Heading, theme };
