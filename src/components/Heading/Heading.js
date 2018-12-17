// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type HeadingProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  text?: string,
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  weight?: 'light' | 'normal' | 'semibold' | 'bold',
|};

const name = 'heading';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    lineHeight: 1.1,
    fontWeight: 400,
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        fontSize: SIZES.HEADING_1,
      },
      h2: {
        fontSize: SIZES.HEADING_2,
      },
      h3: {
        fontSize: SIZES.HEADING_3,
      },
      h4: {
        fontSize: SIZES.HEADING_4,
      },
      h5: {
        fontSize: SIZES.HEADING_5,
      },
      h6: {
        fontSize: SIZES.HEADING_6,
      },
    },
    kind: {
      primary: {
        color: COLORS.TEXT_PRIMARY,
      },
      secondary: {
        color: COLORS.TEXT_SECONDARY,
      },
      disabled: {
        color: COLORS.DISABLED_TEXT_COLOR,
      },
      white: {
        color: COLORS.WHITE,
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
