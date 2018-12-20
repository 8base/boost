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
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        fontSize: SIZES.HEADING_1,
        lineHeight: SIZES.HEADING_1_LH,
      },
      h2: {
        fontSize: SIZES.HEADING_2,
        lineHeight: SIZES.HEADING_2_LH,
      },
      h3: {
        fontSize: SIZES.HEADING_3,
        lineHeight: SIZES.HEADING_3_LH,
      },
      h4: {
        fontSize: SIZES.HEADING_4,
        lineHeight: SIZES.HEADING_4_LH,
      },
      h5: {
        fontSize: SIZES.HEADING_5,
        lineHeight: SIZES.HEADING_5_LH,
      },
      h6: {
        fontSize: SIZES.HEADING_6,
        lineHeight: SIZES.HEADING_6_LH,
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
      medium: {
        fontWeight: 500,
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
